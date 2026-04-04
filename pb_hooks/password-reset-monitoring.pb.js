/// <reference path="../pb_data/types.d.ts" />
// Hook to monitor password reset requests and token generation
onRecordAuthRequest((e) => {
  // Log all auth attempts for monitoring
  if (e.authMethod === 'password') {
    console.log('Password auth attempt for user: ' + e.record.email);
  }
  e.next();
}, 'users');

// Hook to log password reset token generation
onRecordUpdate((e) => {
  const original = e.record.original();
  
  // Check if tokenKey was updated (indicates password reset token generation)
  if (original.get('tokenKey') !== e.record.get('tokenKey')) {
    console.log('Password reset token generated for: ' + e.record.email);
    console.log('Token Key Updated: ' + new Date().toISOString());
  }
  
  e.next();
}, 'users');

// Hook to verify password reset completion
onRecordUpdate((e) => {
  const original = e.record.original();
  
  // Check if password was changed
  if (original.get('password') !== e.record.get('password')) {
    console.log('Password reset completed for: ' + e.record.email);
    console.log('Password changed at: ' + new Date().toISOString());
  }
  
  e.next();
}, 'users');