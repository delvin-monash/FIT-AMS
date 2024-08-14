import { parseDate } from './UtilsDate';
  
  // Validation function to check if a URL is valid
  export function isValidURL(value: string): boolean {
    try {
      new URL(value);
      return true;
    } catch (_) {
      return false;
    }
  }

  // Validation function to check if a date is not before today
export function isDateValid(dateString: string): boolean {
    const date = parseDate(dateString);
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of the day
    return date >= today;
  }

export function validateAbstractWordCount(value: string): boolean {
    return value.split(/\s+/).length <= 250;
  }