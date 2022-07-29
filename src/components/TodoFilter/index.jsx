import React from 'react';
import cx from 'classnames';
import RenderTip from '../RenderTip';
import './TodoFilter.scss';

type TodoFilterProps = {
  filterType: string,
  onFilterChange: (type: string) => void,
};

const TodoFilter: React.FC<TodoFilterProps> = (props) => {
  const { onFilterChange, filterType } = props;
  let allClass = 'btn btn-link';
  if (filterType === 'all') {
    allClass += ' active';
  }
  return (
    <section data-name="TodoFilter" className="style-2">
      <RenderTip />
      <button className={allClass} onClick={() => onFilterChange('all')}>
        All
      </button>
      <button
        className={cx('btn btn-link', { active: filterType === 'active' })}
        onClick={() => onFilterChange('active')}
      >
        Active
      </button>
      <button
        className={cx('btn btn-link', { active: filterType === 'completed' })}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </section>
  );
};
export default React.memo(TodoFilter);
