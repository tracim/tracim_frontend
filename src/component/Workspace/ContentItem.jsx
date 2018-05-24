import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import BtnExtandedAction from './BtnExtandedAction.jsx'

const FileItem = props => {
  const iconStatus = (() => {
    switch (props.status) {
      case 'current':
        return 'fa fa-fw fa-cogs'
      case 'validated':
        return 'fa fa-fw fa-check'
      case 'canceled':
        return 'fa fa-fw fa-times'
      case 'outdated':
        return 'fa fa-fw fa-ban'
    }
  })()

  const textStatus = (() => {
    switch (props.status) {
      case 'current':
        return 'En cours'
      case 'validated':
        return 'Validé'
      case 'canceled':
        return 'Annulé'
      case 'outdated':
        return 'Obsolète'
    }
  })()

  const colorStatus = (() => {
    switch (props.status) {
      case 'current':
        return ' currentColor'
      case 'validated':
        return ' validateColor'
      case 'canceled':
        return ' cancelColor'
      case 'outdated':
        return ' outdateColor'
    }
  })()

  return (
    <div className={classnames('content', 'align-items-center', {'item-last': props.isLast}, props.customClass)} onClick={props.onClickItem}>
      <div className='content__type'>
        <i className={props.icon} />
      </div>

      <div className='content__name'>
        <div className='content__name__text'>
          { props.name }
        </div>
      </div>

      <div className='d-none d-md-flex'>
        <BtnExtandedAction onClickExtendedAction={props.onClickExtendedAction} />
      </div>

      <div className={classnames('content__status d-flex align-items-center justify-content-start') + colorStatus}>
        <div className='content__status__icon d-block '>
          <i className={iconStatus} />
        </div>
        <div className='content__status__text d-none d-xl-block'>
          {textStatus}
        </div>
      </div>
    </div>
  )
}

export default FileItem

FileItem.propTypes = {
  type: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  name: PropTypes.string,
  onClickItem: PropTypes.func
}

FileItem.defaultProps = {
  name: '',
  customClass: '',
  onClickItem: () => {}
}