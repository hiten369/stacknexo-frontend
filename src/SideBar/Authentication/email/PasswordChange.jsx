import React from 'react'
import { NavLink } from 'react-router-dom';

const PasswordChange = () => {
    return (
        <>
        <style
          dangerouslySetInnerHTML={{ __html: "html,body { padding: 0; margin:0; }" }}
        />
        <div
          style={{
            fontFamily: "Arial,Helvetica,sans-serif",
            lineHeight: "1.5",
            fontWeight: "normal",
            fontSize: 15,
            color: "#2F3044",
            minHeight: "100%",
            margin: 0,
            padding: 0,
            width: "100%",
            backgroundColor: "#edf2f7"
          }}
        >
          <br />
          <table
            align="center"
            border={0}
            cellPadding={0}
            cellSpacing={0}
            width="100%"
            style={{
              borderCollapse: "collapse",
              margin: "0 auto",
              padding: 0,
              maxWidth: 600
            }}
          >
            <tbody>
              <tr>
                <td
                  align="center"
                  valign="center"
                  style={{ textAlign: "center", padding: 40 }}
                >
                  <NavLink to="https://keenthemes.com" rel="noopener" target="_blank">
                    <img alt="Logo" src="../../assets/media/logos/mail.svg" />
                  </NavLink>
                </td>
              </tr>
              <tr>
                <td align="left" valign="center">
                  <div
                    style={{
                      textAlign: "left",
                      margin: "0 20px",
                      padding: 40,
                      backgroundColor: "#ffffff",
                      borderRadius: 6
                    }}
                  >
                    {/*begin:Email content*/}
                    <div style={{ paddingBottom: 30, fontSize: 17 }}>
                      <strong>Hello!</strong>
                    </div>
                    <div style={{ paddingBottom: 20 }}>
                      Your Keenthemes password was just changed.
                    </div>
                    <div style={{ paddingBottom: 40 }}>
                      If you didn't change your password, please contact our
                      <NavLink
                        to="#"
                        rel="noopener"
                        target="_blank"
                        style={{
                          textDecoration: "none",
                          color: "#50CD89",
                          fontWeight: "bold"
                        }}
                      >
                        support team
                      </NavLink>
                      . Your security is very important to us!
                    </div>
                    {/*end:Email content*/}
                    <div style={{ paddingBottom: 10 }}>
                      Kind regards,
                      <br />
                      The Keenthemes Team.
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  valign="center"
                  style={{
                    fontSize: 13,
                    textAlign: "center",
                    padding: 20,
                    color: "#6d6e7c"
                  }}
                >
                  <p>Floor 5, 450 Avenue of the Red Field, SF, 10050, USA.</p>
                  <p>
                    Copyright ©
                    <NavLink to="https://keenthemes.com" rel="noopener" target="_blank">
                      Keenthemes
                    </NavLink>
                    .
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
      
    )
}

export default PasswordChange
