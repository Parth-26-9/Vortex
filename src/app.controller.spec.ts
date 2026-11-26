import { describe, it, expect } from 'vitest';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

describe('AppController', () => {
  it('returns "Hello World!"', () => {
    const appController = new AppController(new AppService());
    expect(appController.getHello()).toBe('Hello World!');
  });
});