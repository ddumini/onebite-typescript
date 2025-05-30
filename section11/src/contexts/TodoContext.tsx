import React from 'react';
import type { Todo } from '../types';

export const TodoStateContext = React.createContext<Todo[] | null>(null); 