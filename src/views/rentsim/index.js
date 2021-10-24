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
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const RentSim = () => {
  return (
    <CRow>
      <CCard className="mb-4">
        <CCardBody>
          <CContainer>
            <CRow>
              <CCol sm={4}>
                <CFormSelect aria-label="Default select example">
                  {/* <option>Select service</option> */}
                  <option value="1">Facebook</option>
                  <option value="2">Gmail</option>
                  <option value="3">Tiktok</option>
                </CFormSelect>
              </CCol>
              <CCol sm={2}>
                <CButton
                  color="primary"
                  style={{ height: '100%', width: '100%' }}
                  size="sm"
                  type="submit"
                >
                  <b className="">Make Request</b>
                </CButton>
              </CCol>
              {/* <CCol sm={4}>One of three columns</CCol> */}
            </CRow>
            <CRow>
              <CTable caption="top">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">ID Order</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tên Dịch Vụ</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Giá</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Số ĐT</CTableHeaderCell>
                    <CTableHeaderCell scope="col">OTP</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Thời Gian</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Trạng Thái</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tạo Lúc</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Facebook</CTableDataCell>
                    <CTableDataCell>500</CTableDataCell>
                    <CTableDataCell>0989114555</CTableDataCell>
                    <CTableDataCell>Message</CTableDataCell>
                    <CTableDataCell>1 min</CTableDataCell>
                    <CTableDataCell>Getting</CTableDataCell>
                    <CTableDataCell>19:00:00 15/10/2021</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Gmail</CTableDataCell>
                    <CTableDataCell>350</CTableDataCell>
                    <CTableDataCell>0989155445</CTableDataCell>
                    <CTableDataCell>Message gmail</CTableDataCell>
                    <CTableDataCell>2 min</CTableDataCell>
                    <CTableDataCell>Getting</CTableDataCell>
                    <CTableDataCell>10:50:00 05/10/2021</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>Tiktok</CTableDataCell>
                    <CTableDataCell>250</CTableDataCell>
                    <CTableDataCell>0989114555</CTableDataCell>
                    <CTableDataCell>T-13254</CTableDataCell>
                    <CTableDataCell>1 min</CTableDataCell>
                    <CTableDataCell>Done</CTableDataCell>
                    <CTableDataCell>18:20:00 11/10/2021</CTableDataCell>
                  </CTableRow>
                </CTableBody>
                <CTableCaption>List of order</CTableCaption>
              </CTable>
            </CRow>
          </CContainer>
        </CCardBody>
      </CCard>
    </CRow>
  )
}

export default RentSim
