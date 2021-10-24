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
  CFormLabel,
  CFormInput,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Profile = () => {
  return (
    <CRow>
      <CCard className="">
        <CCardTitle className="mt-4 mb-2">Thông tin tài khoản</CCardTitle>
        <CRow className="mb-3">
          <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Tên tài khoản
          </CFormLabel>
          <CCol sm={5}>
            <CFormInput
              type="text"
              placeholder="vtttuong"
              aria-label="Disabled input example"
              disabled
              readOnly
            />
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Họ Tên
          </CFormLabel>
          <CCol sm={5}>
            <CFormInput
              type="text"
              placeholder="Vo Trung Thien Tuong"
              aria-label="Disabled input example"
            />
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Email
          </CFormLabel>
          <CCol sm={5}>
            <CFormInput
              type="text"
              placeholder="vtttuong@gmail.com"
              aria-label="Disabled input example"
              disabled
              readOnly
            />
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel htmlFor="apiKey" className="col-sm-2 col-form-label">
            API Key
          </CFormLabel>
          <CCol sm={5}>
            <CFormInput
              type="text"
              placeholder="fb5ce719039b695463c86c57e20de2d9"
              aria-label="Disabled input example"
              disabled
              readOnly
            />
          </CCol>
          <CCol xs="auto">
            <CButton type="submit" className="mb-3">
              Change key
            </CButton>
          </CCol>
        </CRow>
        <CCol sm={2}>
          <CButton type="submit" className="mb-3">
            Cập nhật thông tin
          </CButton>
        </CCol>
      </CCard>
    </CRow>
  )
}

export default Profile
