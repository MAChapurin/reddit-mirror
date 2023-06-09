import React from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';



interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => { };

export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  const [pageX, setPageX] = React.useState(0);
  const [pageY, setPageY] = React.useState(0);

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);
  React.useEffect(() => {
    document.addEventListener('resize', closeDropdown);

    function closeDropdown() {
      setIsDropdownOpen(false);
      console.log(window.innerWidth);
    }

    return () => {
      document.removeEventListener('resize', closeDropdown);
    }
  }, []);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
    setIsDropdownOpen(!isDropdownOpen)
  }

  const rect = ref.current?.getBoundingClientRect();
  const node = document.getElementById('portal_root');

  if (!node) return null;


  return (
    <div className={styles.container}>
      <div ref={ref} onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setPageX(ref.current ? ref.current?.getBoundingClientRect().left + 90 : 0)
        setPageY(event.pageY)
        handleOpen()
      }}>
        {button}
      </div>
      {isDropdownOpen && ReactDOM.createPortal(
        <div className={styles.listContainer} style={{ top: `${pageY}px`, left: `${pageX}px` }}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>, node
      )}
    </div>
  );
}


//style={{transform: `translateX(-${pageX}px) translateY(${pageY}px)`}}