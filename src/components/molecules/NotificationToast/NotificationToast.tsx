import cn from 'clsx';
import { Toast } from 'radix-ui';
import { CloseButton } from '../../atoms/UtilityButton';
import './NotificationToast.css';
import { useEffect, useState } from 'react';

type Props = {
  className?: string;
  title?: string;
  message: string;
  isOpen: boolean;
  onClose: (value: boolean) => void;
  notificationType: 'error' | 'info' | 'success';
};

export const NotificationToast: React.FC<Props> = ({
  className,
  title,
  message,
  isOpen,
  onClose,
  notificationType,
}) => {
    const [shouldRender, setShouldRender] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState<boolean>(false);

    useEffect(() => {
      if (isOpen) {
        setShouldRender(true);
        setIsClosing(false);
      } else {
        if (shouldRender) {
          setIsClosing(true);
        }
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    if (!shouldRender) return null;

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        open={true}
        onOpenChange={() => {}}
        className={cn(
          `ToastRoot fixed opacity-0 transition-all duration-300 ease-linear
            bottom-6 md:bottom-10 right-4 translate-x-0
            md:right-[5%] md:translate-x-0
            flex items-center gap-4 p-4 bg-white
            border border-element rounded-2xl
            data-[state=open]:animate-toast-in-right
            data-[state=closed]:animate-toast-out-right`,
            className,
          {
            'shadow-accent-red border-accent-red': notificationType === 'error',
            'shadow-accent-green border-accent-green': notificationType === 'success',
            'shadow-custom': notificationType === 'info',

            'show': !isClosing,
            'hide': isClosing,
          },
        )}
      >
        <div className="">
          {notificationType !== 'error' && (
            <Toast.Title className="buttons mb-2">{title}</Toast.Title>
          )}
          <Toast.Description
            className={cn('text-center body-text', {
              'text-accent-red': notificationType === 'error',
              'text-accent-green': notificationType === 'success',
              'text-primary': notificationType === 'info',
            })}
          >
            {message}
          </Toast.Description>
        </div>
        <Toast.Close
          className="top-2 right-2"
          onClick={() => onClose(false)}
        >
          <CloseButton className="w-8 h-8" />
        </Toast.Close>
      </Toast.Root>
      <Toast.Viewport />
    </Toast.Provider>
  );
};
