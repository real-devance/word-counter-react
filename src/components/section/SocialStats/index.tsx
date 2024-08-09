import styles from './SocialStats.module.scss';
import { XIcon, InstagramIcon, PinterestIcon } from "../../ui/Icons/SocialIcons";

// Define the type for the component props
type SocialSectionProps = {
    curCharsLen: number; // Current character length
};

// Array of social media platforms with their character limits and icons
const socialStatistics = [
    { title: 'X', IconComponent: XIcon, maxChar: 280 },
    { title: 'Instagram', IconComponent: InstagramIcon, maxChar: 2200 },
    { title: 'Pinterest', IconComponent: PinterestIcon, maxChar: 500 },
];

// Functional component to display social media character limits
function SocialStats({ curCharsLen }: SocialSectionProps) {

    // Function to determine CSS class based on remaining characters
    const getStatusClass = (remainingChars: number) => {
        return remainingChars < 0 ? styles.dull : ''; // Apply 'dull' class if characters exceed limit
    }

    return (
        <section className={styles.social_stats_section}>
            <h2 className="text-md font-bold">Social Stats</h2> {/* Heading for the section */}

            {/* Map over socialStatistics to create a list of social media stats */}
            {socialStatistics.map(stat => (
                <div 
                    key={stat.title} 
                    className={`${styles.social_stat} ${getStatusClass(stat.maxChar - curCharsLen)}`}
                >
                    <stat.IconComponent /> {/* Render the icon component */}
                    <p>
                        <span className="text-md font-semi-bold">
                            {stat.maxChar - curCharsLen} / {/* Remaining characters */}
                        </span> 
                        &nbsp;
                        <span className="text-base font-bold">
                            {stat.maxChar} {/* Max characters allowed */}
                        </span>
                    </p>
                </div>
            ))}

        </section>
    );
}

export default SocialStats;
