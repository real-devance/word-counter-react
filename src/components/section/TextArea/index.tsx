import styles from './TextArea.module.scss';
import { CopyIcon, DeleteIcon } from '../../ui/Icons/AppIcons';

type TextAreaProps = {
    className?: string;                              
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;  
    textValue: string;                             
    handleDelete: () => void;                     
    handleCopy: () => void;                      
    textRef?: React.RefObject<HTMLTextAreaElement>; 
};

function TextArea({ textValue, onChange, handleDelete, handleCopy, textRef }: TextAreaProps) {
    return (
        <section className={styles.text_area_section}>
            <textarea
                name="text-area"
                id="text-area"
                aria-label="textarea"   
                placeholder="Enter text here..."
                ref={textRef}           
                value={textValue}        
                className={`text-md font-semi-bold ${styles.user_input_text}`} 
                onChange={onChange}   
            />

            <div className={styles.btn_toolbar}>
                <button 
                    className={styles.action_btn} 
                    aria-label="copy-text"   
                    onClick={handleCopy}    
                >
                    <CopyIcon />            
                </button>
                
                <button 
                    className={styles.action_btn} 
                    aria-label="delete-text"  
                    onClick={handleDelete}   
                >
                    <DeleteIcon />
                </button>
            </div>
        </section>
    );
}

export default TextArea;
