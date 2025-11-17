import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { HeartIcon } from '../Icons/HeartIcon';
import { HeartFilledIcon } from '../Icons/HeartFilledIcon';


type FavoriteButtonProps = {
  selected?: boolean;
  onClick?: () => void;
  className?: string;
};

export const FavoriteButton = ({
  selected,
  onClick,
  className,
}: FavoriteButtonProps) => (
  <UtilityButton
    onClick={onClick}
    className={cn(
      {},
      className,
    )}
  >
    {selected ?
      <HeartFilledIcon className="w-6 h-6" />
    : <HeartIcon className="w-6 h-6" />}
  </UtilityButton>
);
