import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      // 'localStorage' a veri okuma işlemi
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        // Veri varsa parse ederek döndür
        return JSON.parse(storedValue);
      } else {
        // Veri yoksa defaultValue'yu sakla ve kaydet
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      console.error('localStorage okuma hatası:', error);
      return defaultValue;
    }
  });

  // Değer güncellendikçe localStorage'a yazmak için useEffect kullanıyoruz.
  useEffect(() => {
    try {
      // Eğer value değişirse, 'localStorage'ı güncelle
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('localStorage yazma hatası:', error);
    }
  }, [key, value]); // key veya value değişirse, bu efekt çalışır

  return [value, setValue];
}
