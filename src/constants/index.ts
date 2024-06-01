import { CommunityEventType } from "@/types";

// Assets
import event1 from "../../public/objects/community-networking.jpg";
import event2 from "../../public/objects/community-panel.png";
import event3 from "../../public/objects/community-masterclass.jpg";
import event4 from "../../public/objects/community-bootcamp.jpg";
import event5 from "../../public/objects/community-party.jpg";

export const communityEvents: CommunityEventType[] = [
    {
        id: 1,
        title: 'Networking Sessions',
        description: 'Connect with like-minded individuals, experienced founders, mentors, and investors from across India in one location.',
        img: event1,
    },
    {
        id: 2,
        title: 'Panel Discussions',
        description: 'Gain valuable knowledge and insights through discussions with experienced entrepreneurs. Their expertise can significantly contribute to shaping your startup.',
        img: event2,
    },
    {
        id: 3,
        title: 'Master Classes',
        description: 'Entrepreneurs, with their extensive experience in building startups, are ideally suited to teach topics related to entrepreneurship.',
        img: event3,
    },
    {
        id: 4,
        title: 'Bootcamps/Retreats',
        description: 'Gain the opportunity to engage in self-discovery activities to identify your passion before starting your startup journey. Additionally, connect with potential co-founders or teammates.',
        img: event4,
    },
    {
        id: 5,
        title: 'Pizza Parties/Mixers',
        description: 'Connect with like-minded individuals even during your breaks. Engage, vibe, and network with peers who share similar interests.',
        img: event5,
    },
];