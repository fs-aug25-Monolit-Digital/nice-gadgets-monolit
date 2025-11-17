import cn from 'classnames';
import { UtilityButton } from './UtilityButton';

interface ColorButtonProps {
  color: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const ColorButton = ({
  color,
  selected,
  onClick,
  className,
}: ColorButtonProps) => (
  <UtilityButton
    variant="round"
    onClick={onClick}
    className={cn(
      'border-2',
      {
        'border-gray-900': selected,
      },
      className,
    )}
  >
    <span
      className="block rounded-full"
      style={{ width: 32, height: 32, backgroundColor: color }}
    />
  </UtilityButton>
);
