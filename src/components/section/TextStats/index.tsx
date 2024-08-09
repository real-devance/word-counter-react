import styles from './TextStats.module.scss'; 

type StatsSectionProps = {
    textValue: {
        characterCount: number;
        wordCount: number;
        sentenceCount: number;
        charactersWithSpaceCount: number;
        paragraphCount: number;
        specialCharCount: number;
      };
};

function TextStats({ textValue }: StatsSectionProps) {
    const textStatistics = [
        { id: 1, name: "Characters", value: textValue.characterCount },
        { id: 2, name: "Words", value: textValue.wordCount },
        { id: 3, name: "Sentences", value: textValue.sentenceCount },
        { id: 5, name: "Paragraphs", value: textValue.paragraphCount },
        { id: 4, name: "Characters", value: textValue.charactersWithSpaceCount, desc: "with Spaces" },
        { id: 6, name: "Special Characters", value: textValue.specialCharCount },
    ];

    return (
        <section className={styles.text_stats_section}>
            {textStatistics.map(stat => (

                <div key={stat.id} className={styles.stat_item}>
                    <p className="text-base font-bold">{stat.name}:</p>
                    {stat.desc && <p className="text-sm font-semi-bold">{stat.desc}</p>}
                    <p className="text-lg font-semi-bold">{stat.value}</p>
                </div>
            ))}
        </section>
    );
}

export default TextStats;
