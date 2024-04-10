import React from 'react';

function App() {
  return (
    <div class="card card-md">
      <div class="card-body">
        <h2 class="h2 text-center mb-4">Login to your account</h2>

		    <form action="{{ site.base }}/" method="get" autocomplete="off" novalidate>
        	<div class="mb-3">
        		<label class="form-label">Username</label>
        		<input type="text" class="form-control" placeholder="Your username" autocomplete="off" />
        	</div>
        	<div class="mb-2">
        		<label class="form-label">Password</label>
        		<input type="text" class="form-control" placeholder="Your password" autocomplete="off" />
        	</div>
        	<div class="form-footer">
        		<button type="submit" class="btn btn-primary w-100">Sign in</button>
        	</div>
        </form>

      </div>
    </div>
  );
}

export default App;
