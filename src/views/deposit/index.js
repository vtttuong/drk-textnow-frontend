import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormSelect,
  CRow,
  CButton,
  CContainer,
  CTable,
  CTableCaption,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CCardTitle,
  CCardFooter,
  CCardText,
  CListGroup,
  CListGroupItem,
  CAlert,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Deposit = () => {
  return (
    <CRow>
      <CCard className="text-center">
        <CCardHeader>VIETCOMBANK</CCardHeader>
        <CCardBody>
          <CCardTitle>Thông tin chuyển khoản</CCardTitle>
          <CCardText>
            <CAlert color="danger">
              Số tiền tối thiểu mỗi lần nạp là 50.000đ. Nếu nạp ít hơn chúng tôi không hoàn lại!
            </CAlert>
          </CCardText>
          <CListGroup flush>
            <CListGroupItem>STK: 0341007099598 </CListGroupItem>
            <CListGroupItem>Chủ tài khoản: DOAN DUY PHUONG</CListGroupItem>
            <CListGroupItem>Nội dung CK: NT Vtttuong</CListGroupItem>
          </CListGroup>
        </CCardBody>
        <CCardFooter className="text-medium-emphasis">
          Nhập đúng nội dung - Hỗ Trợ: 0586683686 - 0949668948
        </CCardFooter>
      </CCard>
      <CCard className="mt-4">
        <CCardTitle className="mt-4 text-center">Thông tin chuyển khoản</CCardTitle>
        <CCardBody>
          <CContainer>
            <CRow>
              <CTable caption="top">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">ID Order</CTableHeaderCell>
                    <CTableHeaderCell scope="col">TransID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Giá</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tạo Lúc</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>123456</CTableDataCell>
                    <CTableDataCell>500000</CTableDataCell>
                    <CTableDataCell>19:00:00 15/10/2021</CTableDataCell>
                  </CTableRow>
                </CTableBody>
                <CTableCaption>List of transaction</CTableCaption>
              </CTable>
            </CRow>
          </CContainer>
        </CCardBody>
      </CCard>
    </CRow>
  )
}

export default Deposit
