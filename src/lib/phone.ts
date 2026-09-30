/** Keeps digits only, so "+233 24 123 4567" and "233241234567" both work. */
export function digitsOnly(phone: string): string {
  return phone.replace(/\D/g, '');
}

/** tel: link with a leading "+", which opens the dialler with the number filled in. */
export function telHref(phone: string): string {
  return `tel:+${digitsOnly(phone)}`;
}

/** wa.me link (no "+") that opens a WhatsApp chat with an optional pre-filled message. */
export function whatsAppHref(phone: string, message?: string): string {
  const base = `https://wa.me/${digitsOnly(phone)}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Readable international number, e.g. "233241234567" becomes "+233 24 123 4567". */
export function formatInternational(phone: string): string {
  const d = digitsOnly(phone);
  if (d.startsWith('233') && d.length === 12) {
    return `+233 ${d.slice(3, 5)} ${d.slice(5, 8)} ${d.slice(8)}`;
  }
  return `+${d}`;
}

/** Readable local Ghana number, e.g. "0241234567" becomes "024 123 4567". */
export function formatLocal(phone: string): string {
  const d = digitsOnly(phone);
  if (d.length === 10 && d.startsWith('0')) {
    return `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`;
  }
  return d;
}
