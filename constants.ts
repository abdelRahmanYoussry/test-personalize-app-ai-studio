
import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    scenario: "THE ENTRANCE",
    text: "You walk into a grand gala where all of Egypt's stars are present. How do you make your entrance?",
    imageUrl: "https://picsum.photos/seed/egypt1/800/600",
    options: [
      { id: 'a', text: "Quietly observe from the shadows", icon: "visibility" },
      { id: 'b', text: "Command attention with a grand gesture", icon: "theater_comedy" },
      { id: 'c', text: "Head straight for the appetizers", icon: "restaurant" },
      { id: 'd', text: "Start a conversation with the host", icon: "chat" }
    ]
  },
  {
    id: 2,
    scenario: "THE DRAMA",
    text: "A scandalous secret about you is about to be revealed on live television. Your reaction?",
    imageUrl: "https://picsum.photos/seed/egypt2/800/600",
    options: [
      { id: 'a', text: "Deny everything with dramatic flair", icon: "block" },
      { id: 'b', text: "Turn it into a joke and laugh it off", icon: "sentiment_very_satisfied" },
      { id: 'c', text: "Admit it proudly; it's part of my mystery", icon: "auto_awesome" },
      { id: 'd', text: "Lawyer up and stay silent", icon: "gavel" }
    ]
  },
  {
    id: 3,
    scenario: "SCENARIO",
    text: "Your friend gets into a fight at a crowded café. What do you do?",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCul5aP69y2kKQvNo55yaMAYARIhwqWdq9dX0HHuas-JbdDYUr2pC9L30rynD1LRGVi3ZKX5QQO_9CUNoIqKja4tO5t_gGjUhkyAG5BzSaV5uWbQ6S1tc9-V2oxgdMEkhwfayTSTRGYb3_J0Iz0MsNQJxVtcRIqTtOhz79iRqkgfmxIZ8PNp9TJVmXsT-SkhSL10-8tT1bo6tVuyyDtAPFuDB-GORJcYIQ6HCg6WQnwnV4bjdk4i7VSM2ahYmtFWnSaovEKgIbS_5s",
    options: [
      { id: 'a', text: "Join the fight immediately", icon: "sports_mma" },
      { id: 'b', text: "Calm everyone with humor", icon: "theater_comedy" },
      { id: 'c', text: "Watch and sip my tea", icon: "local_cafe" },
      { id: 'd', text: "Call the police secretly", icon: "local_police" }
    ]
  },
  {
    id: 4,
    scenario: "THE ROMANCE",
    text: "You find a love letter from an unknown admirer. How do you find out who sent it?",
    imageUrl: "https://picsum.photos/seed/egypt3/800/600",
    options: [
      { id: 'a', text: "Set a clever trap to catch them", icon: "track_changes" },
      { id: 'b', text: "Wait for destiny to reveal them", icon: "favorite" },
      { id: 'c', text: "Ignore it; I have movies to make", icon: "movie" },
      { id: 'd', text: "Hire a detective to investigate", icon: "search" }
    ]
  },
  {
    id: 5,
    scenario: "THE CLIMAX",
    text: "It's the final scene of your life. What's the last line you speak?",
    imageUrl: "https://picsum.photos/seed/egypt4/800/600",
    options: [
      { id: 'a', text: "I did it my way.", icon: "self_improvement" },
      { id: 'b', text: "To be continued...", icon: "history" },
      { id: 'c', text: "Where is my Oscar?", icon: "star" },
      { id: 'd', text: "The show must go on.", icon: "curtains" }
    ]
  }
];

export const CHARACTER_IMAGES: Record<string, string> = {
  "Adel Emam": "https://lh3.googleusercontent.com/aida-public/AB6AXuAyMID-r8K6NY15DmFm-BV6f8VoF2DJ1QnDDepIyM3m9H66SJwUMiclFT_5eS6POV6Re4iDWeg2qfJdST4OU48bUXJcF_S271f3OEg0PjWlMC3WQ9Uw--avIdHHDD8JhsA_1azEq3NLnfRiKyvTFpAQLItikdQL2uOPUujL46i9Neh_Wv1EA_Pd49lTmNlqejm8P-hFLaxlKChkes1uWok2rIZXLMFSqYeywsTEEVIeHcyEpiEDbxGzDJOqGJ655gGfNlO8uLaQJ5c",
  "Soad Hosny": "https://lh3.googleusercontent.com/aida-public/AB6AXuBCXBu-_yI3sKy111jUETgg5UnwIIqIB1KkQ0AHFhSRJpDEq_6SwGj6NNIYYwvETRzM_yTEII5WbD2d8m5nFy8Bh_e5eYN4uNA53FRkld9KRZNFVNDJs230jO3gHQvUBUbaRSc0vGTY_UqCM7rPexwAaPA2t6xPsWRP6rIkWV7UQgEEL26A7isuApdL7XlAU4lgtVJ2vKNM405a4zlmOXXxpyxD_KnBhx054La0t2soc8vPGGndC_hqkNenAN-M5X02WMSu15oiYrY",
  "Ahmed Helmy": "https://lh3.googleusercontent.com/aida-public/AB6AXuCmItjKYsxpZB7ZG4E3P0Uhrphol_5TirWUXllb-NtS5KReK0vZ3PEXS84zbsMzvoNzwbJWGK9UDFO_xcTT-o0UJHPdxTaFSbqNUhb2yIt3hq3bmJZ7isMHWa4X1LgJI8XMqaPk4rxKX-suFS-vBObEg15UUjaLKgds2kepgwRe7Zx4AtouaeKR3a_y-3SMKJHdR-bqdEUYjpwuGSaw-HK5_F8JWQ68P_e17-dI0jJjP8FjuPtESeRNvPAUtk3_50juOzApiUOSKyg",
  "Ahmed Zaki": "https://lh3.googleusercontent.com/aida-public/AB6AXuA9xOo3FCgyPZ_rHNp9fqtNbY05x2dQKrbOF-AelvDbdbMVqG1Nv-D1YdC9hei8f3czyzWfCyU4uuelu9lxY90oQEKmfYMoqu0PWYfSMJi8JVW4Nf89lMFS6wPBNqSoaHSxC8gAa2EvudpGvgthBW9JOEFP0_ZbHsGzVMRjgvzpXbdxyAfMypSGDmilOEWuUmKrSlfpM48VBA41iQemYYNId74dDUlXFJFLP32-3EGhdWGQnIGsldTeGyt5w-S2ESe8FPZ04X0AWpg",
  "Nadia El Gendy": "https://lh3.googleusercontent.com/aida-public/AB6AXuBelrX_tX698ob5zcN40fBGDxvWEvP591DVRyTNTUthF0nbPsetm-ZkBTMhv_Vn5dykexUvIVJ603VqA0Pmlu6_6MPGT5i9bjLnVf-I4-es4uEBWMY9PbnUYgeitM1xB0oSgx1UYJkWSp1j6Q_gYs99_WHsXmAP2FjmI863nKrH_xmdwbSn-Lf0IlHYH9peAn1kuP-qsXhV5CYq5EVoTz5V3uII7jCiSVHkXtF5gjGqc77LCgsetjYH3n_16x92MGK6KGdcMfyUiBA",
  "Omar Sharif": "https://lh3.googleusercontent.com/aida-public/AB6AXuAe0qn8Uh8S82DvNcvaHPabyhXruzoxg4aczG6AYqJ9ue6zNyHKIcNfa_DmKydimTa65iA2bJpeagDuPgUwexUl0x5qN8HFwYrxcYUtM1smokrXj7nrMrgqMu1CixU79OuLC2F8B4UQEzwsGKNGNH-Xotk0Vm_zuE2j6Vo7wl4_KEA9I86K4jFSHQcOYlSFxuRQ5gUBAfw8Ol75yRNDIPZz8tGIhSSJadAZGa5VCBeupfr9odxlViqthO0HcKUyQW9c1LkQBKQO_2k"
};
