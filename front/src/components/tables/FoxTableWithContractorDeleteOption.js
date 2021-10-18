import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CDataTable,
  CRow,
  CLink,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import WorkStatusDropdown from "./WorkStatusDropdown";
import { FoxApiService } from "../../services";
import { updateModal } from "../../actions";

const foxApi = new FoxApiService();

class FoxTableWithContractorDeleteOption extends Component {
  state = {
    error: "",
  };

  getEntityFromTableName = () => {
    this.props.tableName.toLowercase();
  };

  callDeleteModal = (id) => {
    this.props.updateModal({
      modalType: "deleteContractorModal",
      entity: "contractor",
      confirmDelete: () => this.confirmDelete(id),
    });
  };

  confirmDelete = async (id) => {
    const entity = this.props.tableName.toLowerCase().replace(" ", "_");
    await foxApi
      .deleteEntityOf(entity, id)
      .then(async () => {
        await this.props.updateList({ role: this.props.role });
      })
      .then(() => this.props.updateModal("", {}))
      .catch((error) => {
        console.error(error);
        this.setState({
          error:
            "Could not delete entity!" +
            " Please check your input and try again!" +
            " In case this problem repeats, please contact your administrator!",
        });
      });
  };

  render = () => {
    const linkName = this.props.fields ? this.props.fields[0] : "username";
    return (
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <CCardTitle>{this.props.tableName}</CCardTitle>
              {this.props.showNewButton ? (
                <CLink
                  className="btn primary-btn ml-2"
                  style={{backgroundColor: "#F63854", color: "white"}}
                  to={`${this.props.match.url}/new`}
                >
                  Add Contractor
                </CLink>
              ) : null}
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={this.props.tableData ? this.props.tableData : []}
                fields={this.props.fields}
                loading={this.props.loading}
                clickableRows
                hover
                striped
                sorter
                tableFilter={{ placeholder: "Search...", label:" "}}
                // columnFilter
                size="sm"
                itemsPerPage={10}
                itemsPerPageSelect
                pagination={{}}
                scopedSlots={{
                  [linkName]: (item) => (
                    <td>
                      <CLink to={`${this.props.match.url}/${item.id}`}>
                        {item[linkName]}
                      </CLink>
                    </td>
                  ),
                  application_status: (item) => (
                    <td>
                      <CBadge
                        shape="pill"
                        color={this.props.getBadge(item.application_status)}
                      >
                        {item.application_status}
                      </CBadge>
                    </td>
                  ),
                  project_status: (item) => (
                    <td className="d-flex align-items-center">
                      <CBadge
                        shape="pill"
                        color={this.props.getBadge(item.project_status)}
                      >
                        {item.project_status}
                      </CBadge>
                      <WorkStatusDropdown
                        key={item.id}
                        item={item}
                        {...this.props}
                      />
                    </td>
                  ),
                  delete_item: (item, index) => (
                    <td>
                      <CButton
                        shape="pill"
                        color="danger"
                        variant="ghost"
                        size="sm"
                        onClick={() => this.callDeleteModal(item.id)}
                        block
                      >
                        <CIcon name={"cilTrash"} />
                      </CButton>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    );
  };
}

const mapStateToProps = (state) => ({
  role: state.currentUser.role,
});

const mapDispatchToProps = (dispatch) => ({
  updateModal: ({ modalType, ...rest }) =>
    dispatch(updateModal({ modalType, ...rest })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoxTableWithContractorDeleteOption);
