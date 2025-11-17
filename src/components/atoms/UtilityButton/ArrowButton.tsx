import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { ArrowRightIcon } from '../Icons/ArrowRightIcon';


interface ArrowButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const ArrowButton = ({ disabled, onClick, className }: ArrowButtonProps) => (
  <UtilityButton
    disabled={disabled}
    onClick={onClick}
    className={cn('', className)}
  >
    <ArrowRightIcon/>
  </UtilityButton>
);
