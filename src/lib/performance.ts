// VoteWise AI - Performance Optimization Module
// Code splitting, lazy loading, and performance monitoring

// Intersection Observer for lazy loading
export class LazyLoader {
  private observer: IntersectionObserver;
  private loadedElements = new Set<Element>();

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.loadedElements.has(entry.target)) {
            this.loadElement(entry.target);
            this.loadedElements.add(entry.target);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );
  }

  observe(element: Element): void {
    this.observer.observe(element);
  }

  unobserve(element: Element): void {
    this.observer.unobserve(element);
  }

  private loadElement(element: Element): void {
    // Dispatch custom event for component to handle loading
    element.dispatchEvent(new CustomEvent('lazyLoad'));
  }

  disconnect(): void {
    this.observer.disconnect();
  }
}

// Performance monitoring
export class PerformanceMonitor {
  private static metrics: {
    navigationStart: number;
    firstContentfulPaint?: number;
    largestContentfulPaint?: number;
    firstInputDelay?: number;
    cumulativeLayoutShift?: number;
  } = {
    navigationStart: window.performance.now()
  };

  static init(): void {
    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.firstContentfulPaint = entry.startTime;
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.largestContentfulPaint = lastEntry.startTime;
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.metrics.cumulativeLayoutShift = clsValue;
      }).observe({ entryTypes: ['layout-shift'] });
    }

    // First Input Delay
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.metrics.firstInputDelay = (entry as any).processingStart - entry.startTime;
      }
    }).observe({ entryTypes: ['first-input'] });
  }

  static getMetrics(): typeof this.metrics {
    return { ...this.metrics };
  }

  static logMetrics(): void {
    console.log('Performance Metrics:', this.metrics);
    
    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      // Send metrics to your analytics service
    }
  }
}

// Image optimization utilities
export const imageOptimizer = {
  // Generate responsive image sizes
  generateSrcSet(basePath: string, widths: number[]): string {
    return widths
      .map(width => `${basePath}?w=${width} ${width}w`)
      .join(', ');
  },

  // Generate optimized image URL
  optimizeUrl(src: string, options: {
    width?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'jpg' | 'png';
  } = {}): string {
    const params = new URLSearchParams();
    
    if (options.width) params.append('w', options.width.toString());
    if (options.quality) params.append('q', options.quality.toString());
    if (options.format) params.append('f', options.format);
    
    const paramString = params.toString();
    return paramString ? `${src}?${paramString}` : src;
  }
};

// Debounce utility for performance
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
}

// Throttle utility for performance
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Memoization utility for expensive computations
export function memoize<T extends (...args: any[]) => any>(func: T): T {
  const cache = new Map<string, ReturnType<T>>();
  
  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = func(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

// Virtual scrolling for large lists
export class VirtualScroller {
  private containerHeight: number;
  private itemHeight: number;
  private scrollTop: number = 0;
  private visibleStartIndex: number = 0;
  private visibleEndIndex: number = 0;

  constructor(containerHeight: number, itemHeight: number) {
    this.containerHeight = containerHeight;
    this.itemHeight = itemHeight;
  }

  updateScrollPosition(scrollTop: number): void {
    this.scrollTop = scrollTop;
    this.visibleStartIndex = Math.floor(scrollTop / this.itemHeight);
    this.visibleEndIndex = Math.min(
      this.visibleStartIndex + Math.ceil(this.containerHeight / this.itemHeight) + 1,
      this.getTotalItems() - 1
    );
  }

  getVisibleRange(): { start: number; end: number } {
    return {
      start: this.visibleStartIndex,
      end: this.visibleEndIndex
    };
  }

  getTotalHeight(totalItems: number): number {
    return totalItems * this.itemHeight;
  }

  getOffsetY(): number {
    return this.visibleStartIndex * this.itemHeight;
  }

  private getTotalItems(): number {
    // This should be provided by the component
    return 0;
  }
}

// Resource preloading
export class ResourcePreloader {
  private static preloadedResources = new Set<string>();

  static preloadImage(src: string): Promise<HTMLImageElement> {
    if (this.preloadedResources.has(src)) {
      return Promise.resolve(new Image());
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.preloadedResources.add(src);
        resolve(img);
      };
      img.onerror = reject;
      img.src = src;
    });
  }

  static preloadScript(src: string): Promise<void> {
    if (this.preloadedResources.has(src)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.onload = () => {
        this.preloadedResources.add(src);
        resolve();
      };
      script.onerror = reject;
      script.src = src;
      document.head.appendChild(script);
    });
  }

  static preloadStyle(href: string): Promise<void> {
    if (this.preloadedResources.has(href)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.onload = () => {
        this.preloadedResources.add(href);
        resolve();
      };
      link.onerror = reject;
      link.href = href;
      document.head.appendChild(link);
    });
  }
}

// Bundle size analyzer
export class BundleAnalyzer {
  static analyze(): {
    totalSize: number;
    resources: Array<{
      name: string;
      size: number;
      type: string;
    }>;
  } {
    const resources = Array.from(window.performance.getEntriesByType('resource')).map((entry: any) => ({
      name: entry.name,
      size: entry.transferSize || 0,
      type: this.getResourceType(entry.name)
    }));

    const totalSize = resources.reduce((sum, resource) => sum + resource.size, 0);

    return { totalSize, resources };
  }

  private static getResourceType(url: string): string {
    if (url.endsWith('.js')) return 'javascript';
    if (url.endsWith('.css')) return 'stylesheet';
    if (url.match(/\.(png|jpg|jpeg|gif|webp|svg)$/)) return 'image';
    if (url.match(/\.(woff|woff2|ttf|eot)$/)) return 'font';
    return 'other';
  }
}

// Critical CSS inliner
export function inlineCriticalCSS(css: string): string {
  // This would typically be done at build time
  // Here's a simple implementation for demonstration
  return css;
}

// Service Worker registration for offline caching
export class ServiceWorkerManager {
  static async register(): Promise<void> {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  }

  static async unregister(): Promise<void> {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.ready;
      await registration.unregister();
    }
  }
}

// Performance monitoring hook for React
export function usePerformanceMonitor(componentName: string) {
  const startTime = window.performance.now();

  return {
    endTiming: () => {
      const endTime = window.performance.now();
      const duration = endTime - startTime;
      console.log(`${componentName} render time: ${duration.toFixed(2)}ms`);
      return duration;
    }
  };
}

// Export performance utilities
export const performanceUtils = {
  LazyLoader,
  PerformanceMonitor,
  imageOptimizer,
  debounce,
  throttle,
  memoize,
  VirtualScroller,
  ResourcePreloader,
  BundleAnalyzer,
  ServiceWorkerManager,
  usePerformanceMonitor
};
