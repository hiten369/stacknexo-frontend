import React from 'react'
import { NavLink } from 'react-router-dom';

const PasswordReset = () => {
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
									<div style={{ paddingBottom: 30 }}>
										You are receiving this email because we received a password
										reset request for your account. To proceed with the password
										reset please click on the button below:
									</div>
									<div style={{ paddingBottom: 40, textAlign: "center" }}>
										<NavLink
											to="https://keenthemes.com/password/reset/07579ae29b6?email=max%40kt.com"
											rel="noopener"
											style={{
												textDecoration: "none",
												display: "inline-block",
												textAlign: "center",
												padding: "0.75575rem 1.3rem",
												fontSize: "0.925rem",
												lineHeight: "1.5",
												borderRadius: "0.35rem",
												color: "#ffffff",
												backgroundColor: "#50CD89",
												border: 0,
												marginRight: "0.75rem!important",
												fontWeight: "600!important",
												outline: "none!important",
												verticalAlign: "middle"
											}}
											target="_blank"
										>
											Reset Password
										</NavLink>
									</div>
									<div style={{ paddingBottom: 30 }}>
										This password reset link will expire in 60 minutes. If you did
										not request a password reset, no further action is required.
									</div>
									<div
										style={{ borderBottom: "1px solid #eeeeee", margin: "15px 0" }}
									/>
									<div style={{ paddingBottom: 50, wordWrap: "break-all" }}>
										<p style={{ marginBottom: 10 }}>
											Button not working? Try pasting this URL into your browser:
										</p>
										<NavLink
											to="https://keenthemes.com/password/reset/07579ae29b6?email=max%40kt.com"
											rel="noopener"
											target="_blank"
											style={{ textDecoration: "none", color: "#50CD89" }}
										>
											https://keenthemes.com/account/password/reset/07579ae29b6?email=max%40kt.com
										</NavLink>
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

export default PasswordReset
