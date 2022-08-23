import { Rule } from '../src/utils/types/rules';

export const ruleData: Rule[] = [
  {
    rule: 'Spam/Kommando spam',
    description:
      'Gentag den samme besked eller kommando. Dette gælder også ved unødvendig og voldsom brug af CAPS LOCK.',
    consequence: '10m mute',
  },
  {
    rule: 'Grimt sprog',
    description: 'Omgå sprogfilter eller seksuelle hentydninger og ord.',
    consequence: '10m -> 1t mute',
  },
  {
    rule: 'Nedværdigende tale',
    description:
      'Dette inkluderer racisme og homofobi. Graden af nedværdigende tale kan udløse en længere straf',
    consequence: '7d ban',
  },
  {
    rule: 'Chikane / Personlige angreb',
    description: 'Direkte chikane eller verbalt angreb på en anden spiller.',
    consequence: '7d ban -> Permanent ban',
  },
  {
    rule: 'Døds- eller DDos trusler',
    description:
      'Alt, der indeholder en alvorlig trussel mod en anden person, deres liv eller velbefindende, kan ses som en dødstrussel',
    consequence: 'Permanent ban',
  },
  {
    rule: 'Udlevering af personlige oplysninger',
    description:
      'Vidergivelse af personlige oplysninger om en anden spiller. Fx fulde navn, addresse, telefonnummer eller lignende',
    consequence: 'Permanent ban',
  },
  {
    rule: 'Udgiver sig for at være en anden',
    description:
      'Når en spiller udgiver sig for at være en anden spiller eller staff medlem',
    consequence: '7d ban',
  },
  {
    rule: 'Reklame',
    description:
      'Reklame er, når en spiller reklamerer for en anden server / spammer IP for en server',
    consequence: 'Permanent ban',
  },
  {
    rule: 'Upassende navn',
    description: 'At have et navn, der ikke passer på en familievenlig server',
    consequence: 'Permanent ban indtil ændret',
    note: 'Ansøg om unban, når navnet er ændret',
  },
  {
    rule: 'Upassende skin',
    description: 'At have et skin, der ikke passer på en familievenlig server',
    consequence: 'Permanent ban indtil ændret',
    note: 'Ansøg om unban, når skinnet er ændret',
  },
  {
    rule: 'Upassende links',
    description:
      'Upassende links er links til blandt andet pornosider eller lignende',
    consequence: 'Permanent ban',
  },
  {
    rule: 'Upassende byggerier',
    description:
      'Upassende bygninger såsom nazistiske symboler eller seksuelle bygninger',
    consequence: 'Advarsel + fjernelse -> 7d ban',
  },
  {
    rule: 'Tredje parts handler',
    description:
      'At tilbyde / anmode om eller betale andre for ting uden for Heidelife Fx. rigtige penge for en in-game tjeneste',
    consequence: 'Permanent ban',
  },
  {
    rule: 'Chargeback',
    description:
      'Oprettelse af et krav om tilbagebetaling af varer købt i Heidelife buttoken (ranks. osv)',
    consequence: 'Permanent ban',
  },
  {
    rule: 'Tpa drab',
    description: 'At tpa til en spiller med den hensigt at dræbe denne person',
    consequence: '1d ban',
  },
  {
    rule: 'Tpa fælde',
    description:
      'At tpa en spiller til dig for at fange personen i f.eks. en portal',
    consequence: '1d ban',
  },
  {
    rule: 'Manglende respekt for staff',
    description:
      'At kalde en medarbejder grimme ting eller generet tale nedsættende til eller om personen',
    consequence: '1t mute -> 1d ban',
  },
  {
    rule: 'Brug af ulovlige mods',
    description: 'At bruge mods i Minecraft, som fx. Wurst og Huzuni',
    consequence: '7d ban',
  },
  {
    rule: 'Omgå AFK system',
    description:
      'At bruge et system for at omgå AFK systemet. Eks. auto kommandoer osv.',
    consequence: '1d ban',
  },
];
