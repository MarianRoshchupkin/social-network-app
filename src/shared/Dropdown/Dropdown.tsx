import React, { useEffect, useRef, useState } from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

  const ref = useRef<HTMLDivElement>(null);
  const rect = ref.current?.getBoundingClientRect();
  let node;

  useEffect(() => {
    node = document.querySelector('#modal_root')
  }, [])

  if (!node) return null;

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        { button }
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer} style={{
          top: Math.round(rect ? rect.top + rect.height : 0),
          left: Math.round(rect ? rect.left - rect.width/2 : 0)
        }}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            { children }
          </div>
        </div>
      )}
    </div>
  );
}
