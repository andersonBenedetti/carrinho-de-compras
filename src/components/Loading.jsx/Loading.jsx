import React from 'react';

import styles from './Loading.module.css';

import {LuLoader2} from 'react-icons/lu';

export default function Loading() {
  return <LuLoader2 className={styles.loading} />;
}
