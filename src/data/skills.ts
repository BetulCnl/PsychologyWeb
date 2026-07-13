import {
  Blocks,
  ClipboardList,
  HeartHandshake,
  Music,
} from "lucide-react";
import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Terapi Ekolleri",
    description: "Kanıta dayalı, danışanın yaşına ve ihtiyacına göre şekillenen yöntemler.",
    icon: Blocks,
    items: [
      "Bilişsel Davranışçı Terapi (BDT)",
      "Çocuk Merkezli Oyun Terapisi",
      "Travma Odaklı Oyun Terapisi",
      "Sanat Terapisi Uygulamaları",
      "Mindfulness Temelli Pratikler",
    ],
  },
  {
    title: "Değerlendirme & Takip",
    description: "Objektif ve projektif araçlarla gelişimi görünür kılan süreç yönetimi.",
    icon: ClipboardList,
    items: [
      "Çocuk Değerlendirme Testleri",
      "Klinik Gözlem & Raporlama",
      "Vaka Analizi ve Müdahale Planı",
      "Düzenli Süpervizyon ile Takip",
    ],
  },
  {
    title: "Danışmanlık",
    description: "Çocuğun çevresindeki yetişkinleri sürece dahil eden bütüncül bakış.",
    icon: HeartHandshake,
    items: [
      "Ebeveyn Danışmanlığı",
      "Okul & Öğretmen İş Birliği",
      "Duygusal Regülasyon Psikoeğitimi",
      "Kurumsal Eğitimler (Stres Yönetimi)",
    ],
  },
  {
    title: "Müzik & Diller",
    description: "Terapötik ilişkiyi zenginleştiren ifade araçları.",
    icon: Music,
    items: [
      "Keman (MEB Sertifikalı)",
      "Ukulele ile Müzik Terapisi",
      "İngilizce (C1 · Pearson Assured)",
      "Türk İşaret Dili (MEB)",
    ],
  },
];
