import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {} from 'jasmine';

export class NativeElementAssertionHandler {

  constructor(private fixture: ComponentFixture<any>) {
  }

  public assertElementExists(identifier: string) {
    return NativeElementAssertionHandler.assertNativeElementExists(this.fixture, identifier);
  }

  public assertElementDoesNotExist(identifier: string) {
    return NativeElementAssertionHandler.assertNativeElementDoesNotExist(this.fixture, identifier);
  }

  public assertElementTextContentEquals(identifier: string, expectedValue: string) {
    return NativeElementAssertionHandler.assertNativeElementTextContentEquals(this.fixture, identifier, expectedValue);
  }

  public assertElementTrimmedTextContentEquals(identifier: string, expectedValue: string) {
    return NativeElementAssertionHandler.assertNativeElementTrimmedTextContentEquals(this.fixture, identifier, expectedValue);
  }

  public assertElementTextContentContains(identifier: string, expectedValue: string) {
    return NativeElementAssertionHandler.assertNativeElementTextContentContains(this.fixture, identifier, expectedValue);
  }

  public assertElementAttributeEquals(identifier: string, attributeName: string, expectedValue: string) {
    return NativeElementAssertionHandler.assertNativeElementAttributeEquals(this.fixture, identifier, attributeName, expectedValue);
  }

  public assertElementHasClass(identifier: string, expectedClass: string) {
    return NativeElementAssertionHandler.assertNativeElementClassNameExists(this.fixture, identifier, expectedClass);
  }

  public static assertNativeElementExists(fixture: ComponentFixture<any>, elementIdentifier: string) {
    const nativeElement = NativeElementAssertionHandler.getNativeElement(fixture, elementIdentifier);
    expect(nativeElement).toBeTruthy();
  }

  public static assertNativeElementDoesNotExist(fixture: ComponentFixture<any>, elementIdentifier: string) {
    const nativeElement = NativeElementAssertionHandler.getNativeElement(fixture, elementIdentifier);
    expect(nativeElement).toBeFalsy();
  }

  public static assertNativeElementTextContentContains(fixture: ComponentFixture<any>, elementIdentifier: string, expectedValue: any) {
    const nativeElement = NativeElementAssertionHandler.getNativeElement(fixture, elementIdentifier);
    expect(nativeElement.textContent).toContain(expectedValue);
  }

  public static assertNativeElementTextContentEquals(fixture: ComponentFixture<any>, elementIdentifier: string, expectedValue: any) {
    const nativeElement = NativeElementAssertionHandler.getNativeElement(fixture, elementIdentifier);
    expect(nativeElement.textContent).toBe(expectedValue);
  }

  public static assertNativeElementTrimmedTextContentEquals(fixture: ComponentFixture<any>, elementIdentifier: string, expectedValue: any) {
    const nativeElement = NativeElementAssertionHandler.getNativeElement(fixture, elementIdentifier);
    expect(nativeElement.textContent.trim()).toBe(expectedValue);
  }

  public static assertNativeElementAttributeEquals(fixture: ComponentFixture<any>, elementIdentifier: string, attributeName: string, expectedValue: string) {
    const nativeElement = NativeElementAssertionHandler.getNativeElement(fixture, elementIdentifier);
    expect(nativeElement.attributes[attributeName].value).toBe(expectedValue);
  }

  private static getNativeElement(fixture: ComponentFixture<any>, elementIdentifier: string): any {
    const debugElement = fixture.debugElement.query(By.css(elementIdentifier));
    if (!debugElement) {
      return null;
    }
    return debugElement.nativeElement;
  }

  public static assertNativeElementClassNameExists(fixture: ComponentFixture<any>, elementIdentifier: string, className: string) {
    const nativeElement = NativeElementAssertionHandler.getNativeElement(fixture, elementIdentifier);
    expect(nativeElement.classList.contains(className));
  }
}
