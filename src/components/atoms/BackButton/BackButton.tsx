import cn from 'classnames';
import { ArrowLeftButton } from '../UtilityButton';
import { useNavigate } from 'react-router-dom';

type BackButtonProps = {
  text?: string;
  className?: string;
};

export const BackButton: React.FC<BackButtonProps> = ({ text, className }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-2 mb-4"> 
      <button
        onClick={() => navigate(-1)}
        className={cn(
        "flex items-center gap-1",
        "text-xs font-semibold text-secondary",
        "hover:text-primary",
        "transition-colors duration-300",
        'group',
        className
      )}
      >
        <ArrowLeftButton className='border-0'/>
        {text}
      </button>
    </div>
  );
};