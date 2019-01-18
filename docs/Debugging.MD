# Debugging with the PactSafe React SDK

You can optionally enable debugging in our React SDK library with the `debug` prop.

```JSX
<PSClickWrap 
  accessId={PACTSAFE_ACCESS_ID} 
  groupKey={PACTSAFE_GROUP_KEY}
  debug={true}
/>
```

By enabling this flag, you'll start seeing all sorts of events in your console and be able to track various events and triggers from our library as you are coding!
