export function rpcPost(
    rpcClassMethod: string, 
    value: string, 
    key?: string, 
    rack_id?: number
  ): void {
    // Base URL for the RPC endpoint
    const baseUrl = 'http://localhost:18080/rpc';
  
    // Construct the query parameters
    let queryParams = new URLSearchParams({
      method: rpcClassMethod,
      value: value,
    });
  
    // Optionally include key and rack_id if provided
    if (key) {
      queryParams.append('key', key);
    }
  
    if (rack_id) {
      queryParams.append('rack_id', rack_id.toString());
    }
  
    // Final URL with query parameters
    const url = `${baseUrl}?${queryParams.toString()}`;
  
    // Perform the GET request (assuming fetch is available)
    fetch(url)
      .then(response => response.json())  // Parse JSON response
      .then(data => {
        // Handle the response data here
        console.log('RPC Response:', data);
      })
      .catch(error => {
        // Handle errors here
        console.error('RPC Request failed:', error);
      });
  }
  
  export function rpcPostUri(
    uri: string, 
  ): void {
    // Base URL for the RPC endpoint
    //const baseUrl = 'http://localhost:18080/rpc';
    const baseUrl = 'http://192.168.0.167:18080/rpc';
    
  // Final URL with query parameters
  const url = baseUrl + "?" + uri;
  
    // Perform the GET request (assuming fetch is available)
    fetch(url)
      .then(response => response.json())  // Parse JSON response
      .then(data => {
        // Handle the response data here
        console.log('RPC Response:', data);
      })
      .catch(error => {
        // Handle errors here
        console.error('RPC Request failed:', error);
      });
  }
  