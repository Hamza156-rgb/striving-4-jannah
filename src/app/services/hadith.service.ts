import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

export interface Hadith {
  id: number;
  hadithNumber: string;
  englishNarrator: string;
  hadithEnglish: string;
  hadithArabic: string;
  hadithUrdu?: string;
  bookSlug: string;
  bookName: string;
  chapterName?: string;
}

@Injectable({ providedIn: 'root' })
export class HadithService {
  private base = 'https://hadithapi.com/api';
  // Using ihadis.com as backup - public API
  private altBase = 'https://api.sunnah.com/v1';

  constructor(private http: HttpClient) {}

  // Using a reliable free hadith source
  getHadiths(book: string = 'bukhari', page: number = 1): Observable<Hadith[]> {
    // Using hadith-api (free, no key needed for basic)
    return this.http.get<any>(`https://random-hadith-generator.vercel.app/bukhari/`).pipe(
      map(r => {
        if (r && r.data) {
          return [this.mapHadith(r.data, book)];
        }
        return this.getFallbackHadiths();
      })
    );
  }

  getRandomHadith(): Observable<Hadith> {
    const books = ['bukhari', 'muslim', 'abudawud', 'tirmidhi', 'nasai', 'ibnmajah'];
    const book = books[Math.floor(Math.random() * books.length)];
    return this.http.get<any>(`https://random-hadith-generator.vercel.app/${book}/`).pipe(
      map(r => r.data ? this.mapHadith(r.data, book) : this.getFallbackHadiths()[0])
    );
  }

  private mapHadith(d: any, book: string): Hadith {
    return {
      id: Math.random(),
      hadithNumber: d.id || d.hadithNumber || '1',
      englishNarrator: d.englishNarrator || d.header || 'Narrated',
      hadithEnglish: d.hadith_english || d.hadithEnglish || d.text || '',
      hadithArabic: d.hadith_arabic || d.hadithArabic || '',
      hadithUrdu: d.hadith_urdu || '',
      bookSlug: book,
      bookName: this.getBookName(book),
      chapterName: d.chapterName || d.chapter || ''
    };
  }

  private getBookName(slug: string): string {
    const map: Record<string, string> = {
      bukhari: 'Sahih Al-Bukhari', muslim: 'Sahih Muslim',
      abudawud: 'Sunan Abu Dawud', tirmidhi: 'Jami At-Tirmidhi',
      nasai: "Sunan An-Nasa'i", ibnmajah: 'Sunan Ibn Majah'
    };
    return map[slug] || slug;
  }

  private getFallbackHadiths(): Hadith[] {
    return [
      {
        id: 1, hadithNumber: '1', bookSlug: 'bukhari', bookName: 'Sahih Al-Bukhari',
        englishNarrator: 'Narrated Umar ibn Al-Khattab (RA):',
        hadithEnglish: 'The Messenger of Allah (ﷺ) said: "Actions are according to intentions, and everyone will get what was intended."',
        hadithArabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
        hadithUrdu: 'اعمال کا دارومدار نیتوں پر ہے اور ہر شخص کو وہی ملے گا جس کی اس نے نیت کی۔',
        chapterName: 'How the Divine Revelation started'
      },
      {
        id: 2, hadithNumber: '6018', bookSlug: 'bukhari', bookName: 'Sahih Al-Bukhari',
        englishNarrator: 'Narrated Abu Hurairah (RA):',
        hadithEnglish: 'The Prophet (ﷺ) said, "Whoever believes in Allah and the Last Day should speak good or keep silent."',
        hadithArabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
        hadithUrdu: 'جو شخص اللہ اور آخرت کے دن پر ایمان رکھتا ہے وہ اچھی بات کہے یا خاموش رہے۔',
        chapterName: 'Good Manners'
      },
      {
        id: 3, hadithNumber: '2442', bookSlug: 'muslim', bookName: 'Sahih Muslim',
        englishNarrator: 'Narrated Abu Hurairah (RA):',
        hadithEnglish: 'The Messenger of Allah (ﷺ) said: "Do not consider any act of kindness insignificant, even meeting your brother with a cheerful face."',
        hadithArabic: 'لَا تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا وَلَوْ أَنْ تَلْقَى أَخَاكَ بِوَجْهٍ طَلْقٍ',
        hadithUrdu: 'کسی نیک کام کو حقیر مت سمجھو، چاہے تم اپنے بھائی سے خوشی کے ساتھ ملو۔',
        chapterName: 'Virtue and Doing Good'
      },
      {
        id: 4, hadithNumber: '55', bookSlug: 'bukhari', bookName: 'Sahih Al-Bukhari',
        englishNarrator: 'Narrated Ibn Masud (RA):',
        hadithEnglish: 'A man asked the Prophet (ﷺ): "Which deed is the best?" He replied, "To offer the prayers at their early stated fixed times."',
        hadithArabic: 'أَيُّ الْعَمَلِ أَحَبُّ إِلَى اللَّهِ قَالَ الصَّلَاةُ عَلَى وَقْتِهَا',
        hadithUrdu: 'سب سے بہتر عمل کونسا ہے؟ آپ ﷺ نے فرمایا: نماز کو اس کے وقت پر ادا کرنا۔',
        chapterName: 'Times of the Prayers'
      },
      {
        id: 5, hadithNumber: '1', bookSlug: 'muslim', bookName: 'Sahih Muslim',
        englishNarrator: 'Narrated Abu Hurairah (RA):',
        hadithEnglish: 'The Messenger of Allah (ﷺ) said: "The strong man is not the one who can wrestle others down. The strong man is the one who can control himself when angry."',
        hadithArabic: 'لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ',
        hadithUrdu: 'پہلوان وہ نہیں جو لوگوں کو پچھاڑ دے، بلکہ پہلوان وہ ہے جو غصے کے وقت خود پر قابو رکھے۔',
        chapterName: 'Virtue and Good Manners'
      }
    ];
  }
}
