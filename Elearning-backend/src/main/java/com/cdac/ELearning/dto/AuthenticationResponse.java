package com.cdac.ELearning.dto;

public class AuthenticationResponse {

	private String authenticationToken;
    
	private String username;
	
	private String firstName;

	private String role;


	public AuthenticationResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	public AuthenticationResponse(String authenticationToken, String username, String firstName,String role) {
		super();
		this.authenticationToken = authenticationToken;
		this.username = username;
		this.firstName = firstName;
		this.role = role;
	}



	public String getAuthenticationToken() {
		return authenticationToken;
	}

	public void setAuthenticationToken(String authenticationToken) {
		this.authenticationToken = authenticationToken;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
}

