import {
  Building2,
  Lightbulb,
  ScreenShare,
  Trophy,
  User,
  User2,
  LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import FeaturesPointerSection, { FeatureCard, FeatureItem } from '../custom-ui/FeaturesPointersSection';

// Create feature data arrays for left and right columns
const leftFeatures: FeatureItem[] = [
  {
    icon: Building2,
    title: '111 Performance Focused',
    description:
      ' Campaigns designed to generate leads, conversions, and measurable ROI. .',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: User2,
    title: 'SEO & Visibility',
    description:
      ' Improve rankings, increase traffic, and stay visible where customers search..',
    position: 'left',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: Trophy,
    title: ' Optimization',
    description:
      'Campaigns monitored, tested, and improved for consistent results..',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-tr-[2px]',
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: ScreenShare,
    title: ' Analytics',
    description:
      ' Track performance, understand data, and make smarter marketing decisions.',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: User,
    title: 'Brand Building',
    description:
      'Build a strong digital presence that customers recognize and trust..',
    position: 'right',
    cornerStyle: 'sm:translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: Lightbulb,
    title: 'CRM Integration',
    description:
      ' Connect leads, campaigns, and data into one streamlined system.',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-tl-[2px]',
  },
];


export default function AutomationFeatures() {
  return (
    <>

    <FeaturesPointerSection heading='Automation' description='Desc' leftFeatures={leftFeatures} rightFeatures={rightFeatures} />
    
    </>
  );
}
