import {
  Briefcase,
  HandHeart,
  Music2,
  Palette,
  PartyPopper,
  Sparkles,
} from "lucide-react";
import type { ProjectItem } from "./types";

export const projects: ProjectItem[] = [
  {
    title: "Masal & Müzik Sanat Atölyesi",
    context: "Sevgi Tomurcukları Anaokulu",
    description:
      "Masal terapisi ile müzik terapisini birleştiren; keman ve ukulele eşliğinde çocukların bilişsel gelişimini destekleyen interaktif atölye tasarımı ve uygulaması.",
    tags: ["Masal Terapisi", "Müzik Terapisi", "Okul Öncesi"],
    icon: Music2,
  },
  {
    title: "Düğümler ve Duygular",
    context: "Sanat Terapi Atölyesi",
    description:
      "Bireylerin kendini tanıma ve kendini gerçekleştirme yolculuğuna eşlik etmek üzere tasarlanan, interaktif bir sanat terapi atölyesi serisi.",
    tags: ["Sanat Terapisi", "Yetişkin", "Grup Çalışması"],
    icon: Palette,
  },
  {
    title: "Stres Yönetimi Eğitimi",
    context: "Ferrero Fındık",
    description:
      "Kurum çalışanlarına stres yönetimi, dikkat ve mindfulness pratikleri üzerine tasarlanmış interaktif kurumsal eğitim programı.",
    tags: ["Kurumsal Eğitim", "Mindfulness", "İyi Oluş"],
    icon: Briefcase,
  },
  {
    title: "TOÇEV Kulüp Başkanlığı",
    context: "Maltepe Üniversitesi · TOÇEV",
    description:
      "Dezavantajlı çocuklar için sosyal, kültürel ve eğitici etkinlikler; akran danışmanlığı ve üniversite–vakıf iş birliğinin koordinasyonu, ekip ve organizasyon yönetimi.",
    tags: ["Gönüllülük", "Liderlik", "Çocuk Gelişimi"],
    icon: HandHeart,
  },
  {
    title: "Kurumsal Etkinlik Organizasyonları",
    context: "The Ritz-Carlton · CVK Park Bosphorus",
    description:
      "TOÇEV çocukları için yılbaşı ve Cumhuriyet'in 100. yılı kutlamaları ile 'Gönüllülük, Sanat ve Edebiyat' söyleşisinin uçtan uca planlanması ve yürütülmesi.",
    tags: ["Organizasyon", "Koordinasyon", "Etkinlik Tasarımı"],
    icon: PartyPopper,
  },
  {
    title: "Okuldayız Üsküdar'da",
    context: "SOYAÇ · Safe Families Safe Children",
    description:
      "'Bağlanma İlişkisinin Tesisi Yoluyla Akran Temelli Terapötik Yaklaşım' modeliyle yüksek risk grubundaki çocuklara akran danışmanı olarak destek.",
    tags: ["Travma Bilgili Yaklaşım", "Akran Danışmanlığı", "Saha Çalışması"],
    icon: Sparkles,
  },
];
