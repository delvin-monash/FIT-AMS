// Utility function to format a Date object as yyyy-MM-dd
export function formatDate(date: Date): string {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  // Utility function to parse a date string (yyyy-MM-dd) to a Date object
  export function parseDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  }
  
  // Example validation function
  export function isValidDate(dateString: string): boolean {
    const date = parseDate(dateString);
    return date instanceof Date && !isNaN(date.getTime());
  }
  