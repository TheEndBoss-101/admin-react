import React from 'react';

function SignIn() {
  return (
    <div className="card card-md">
      <div className="card-body">
        <h2 className="h2 text-center mb-4">Login to your account</h2>

		    <form action="{{ site.base }}/" method="get" autoComplete="off" novalidate>
        	<div className="mb-3">
        		<label className="form-label">Username</label>
        		<input type="text" className="form-control" placeholder="Your username" autoComplete="off" />
        	</div>
        	<div className="mb-2">
        		<label className="form-label">Password</label>
        		<input type="text" className="form-control" placeholder="Your password" autoComplete="off" />
        	</div>
        	<div className="form-footer">
        		<button type="submit" className="btn btn-primary w-100">Sign in</button>
        	</div>
        </form>

      </div>
    </div>
  );
}

export default SignIn;
