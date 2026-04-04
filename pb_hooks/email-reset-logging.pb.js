/// <reference path="../pb_data/types.d.ts" />
// Hook to log password reset email requests
onRecordCreateRequest((e) => {
  // This fires when a password reset is requested via API
  // Log the attempt to email_audit_logs
  
  const email = e.requestInfo.query.email || '';
  
  if (email) {
    try {
      const logRecord = new Record(e.app.findCollectionByNameOrId('email_audit_logs'));
      logRecord.set('email_address', email);
      logRecord.set('event_type', 'password_reset_requested');
      logRecord.set('status', 'pending');
      logRecord.set('ip_address', e.requestInfo.remoteIP);
      logRecord.set('user_agent', e.requestInfo.headers.get('user-agent') || 'unknown');
      
      e.app.save(logRecord);
      console.log('Password reset requested for: ' + email);
    } catch (err) {
      console.log('Error logging password reset request: ' + err.message);
    }
  }
  
  e.next();
}, 'users');

// Hook to verify password reset token generation
onRecordUpdate((e) => {
  const original = e.record.original();
  const email = e.record.email();
  
  // Check if tokenKey changed (password reset token generated)
  if (original.get('tokenKey') !== e.record.get('tokenKey')) {
    try {
      const logRecord = new Record(e.app.findCollectionByNameOrId('email_audit_logs'));
      logRecord.set('email_address', email);
      logRecord.set('event_type', 'password_reset_sent');
      logRecord.set('status', 'sent');
      logRecord.set('reset_token_generated', true);
      logRecord.set('user_id', e.record.id);
      
      e.app.save(logRecord);
      console.log('Password reset token generated and email sent to: ' + email);
    } catch (err) {
      console.log('Error logging password reset token: ' + err.message);
    }
  }
  
  e.next();
}, 'users');

// Hook to log password reset completion
onRecordUpdate((e) => {
  const original = e.record.original();
  const email = e.record.email();
  
  // Check if password was changed
  if (original.get('password') !== e.record.get('password')) {
    try {
      const logRecord = new Record(e.app.findCollectionByNameOrId('email_audit_logs'));
      logRecord.set('email_address', email);
      logRecord.set('event_type', 'password_reset_completed');
      logRecord.set('status', 'sent');
      logRecord.set('user_id', e.record.id);
      
      e.app.save(logRecord);
      console.log('Password reset completed for: ' + email);
    } catch (err) {
      console.log('Error logging password reset completion: ' + err.message);
    }
  }
  
  e.next();
}, 'users');