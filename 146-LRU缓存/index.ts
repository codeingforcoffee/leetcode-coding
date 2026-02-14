class LRUCache {
  private capacity: number;
  private cache: Map<number, number>;
  private iruList: number[] = [];
  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map<number, number>();
  }

  private findCacheIndex(key: number): number {
    return this.iruList.indexOf(key);
  }

  private updateCacheLRU(key: number): void {
    const cacheIndex = this.findCacheIndex(key);
    if (cacheIndex !== -1) {
      this.iruList.splice(cacheIndex, 1);
    }
    this.iruList.push(key);
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key)!;
    this.updateCacheLRU(key);
    return value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.set(key, value);
      this.updateCacheLRU(key);
      return;
    }
    if (this.cache.size >= this.capacity) {
      const oldestKey = this.iruList.shift();
      this.cache.delete(oldestKey!);
    }
    this.cache.set(key, value);
    this.iruList.push(key);
  }
}
