import { useContext } from 'react';
import { CommentContext } from '../contexts/CommentContext';

export const useCommentContext = () => {
    const context = useContext(CommentContext);
    if (!context) throw Error('useCommentContext must be used inside an CommentContextProvider');
    return context;
};
