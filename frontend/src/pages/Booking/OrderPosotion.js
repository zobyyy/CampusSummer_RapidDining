import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Booking.module.scss'
import Link from 'next/link'
import { Field, ErrorMessage } from 'formik'
import BookingInfoInput from '@/pages/Booking/BookingInfoInput'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Image from 'next/image'

const BookingCheck = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        padding: '10% 0'
      }}
    >
      <Image src='/收到確認.png' width={67} height={67} />
      <div>黃小姐您好</div>
      <div>我們將會為您保留座位</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        請盡速於
        <div
          style={{
            fontSize: '32px',
            color: '#F58873',
            fontWeight: '700',
            margin: '10px',
            marginTop: '0'
          }}
        >
          10
        </div>
        分鐘內抵達，謝謝！
      </div>
    </div>
  )
}
const BasicSelect = () => {
  const [peopleNum, setPeopleNum] = React.useState('')

  const handleChange = (event) => {
    setPeopleNum(event.target.value)
  }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={peopleNum}
          label=''
          onChange={handleChange}
          sx={{ borderRadius: '10px', height: '45px' }}
        >
          <MenuItem value={1}>1位</MenuItem>
          <MenuItem value={2}>2位</MenuItem>
          <MenuItem value={3}>3位</MenuItem>
          <MenuItem value={4}>4位</MenuItem>
          <MenuItem value={5}>5位</MenuItem>
          <MenuItem value={6}>6位</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
const OrderPosition = () => {
  const [isOrderPosition, setIsOrderPosition] = useState(false)

  const handleOrderButtonClick = () => {
    setIsOrderPosition(!isOrderPosition)
  }
  return (
    <div className={styles.order}>
      <div className={styles.orderInfo}>
        {isOrderPosition ? (
          <BookingCheck />
        ) : (
          <>
            <div className={styles.inputGroup}>
              <span>用餐人數</span>
              <BasicSelect />
              {/* <input className={styles.inputText} /> */}
            </div>
            <BookingInfoInput />
          </>
        )}
      </div>
      <>
        <button
          className={
            isOrderPosition ? styles.orderButtonCancel : styles.orderButton
          }
          onClick={handleOrderButtonClick}
        >
          {isOrderPosition ? '取消訂位' : '立即訂位'}
        </button>
        {!isOrderPosition && (
          <div className={styles.orderButtonRemind}>
            如有位置會為您保留10分鐘座位
          </div>
        )}
      </>
    </div>
  )
}

export default OrderPosition
