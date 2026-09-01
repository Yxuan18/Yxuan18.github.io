# Daily CVE Report - 2026-09-01

**96** CVEs published in the last 24 hours with CVSS >= 5.5
- CRITICAL (9.0-10.0): **41**
- HIGH (7.0-8.9): **72**
- MEDIUM (4.0-6.9): **27**

> IOC indicators are based on vulnerability types for threat hunting, not confirmed detections.

---



> Filtered out 44 CVE(s) with only generic remediation links.
## CVE-2026-82693 | CVSS 10.0 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82693
**Weakness:** CWE-287, CWE-306

### Situation
A vulnerability was determined in Tenda AC1206 15.03.06.23. This vulnerability affects the function TendaTelnet of the file /goform/telnet of the component Web UI. Executing a manipulation can lead to missing authentication. It is possible to launch the attack remotely. The exploit has been publicly disclosed and may be utilized.

### Potential IOCs
- Authentication bypass attempts in access logs
- Logins without corresponding credential validation events
- Sessions created without prior authentication events

### Remediation
- https://github.com/dxz0069/WAVLINK-WN530H4-Command-Injection-in-set_add_routing/blob/main/TENDA-AC1206-TELNET-DEFAULT-UNAUTH-001-vulndb.md
- https://vuldb.com/cve/CVE-2026-82693
- https://vuldb.com/submit/894235

---

## CVE-2026-82694 | CVSS 10.0 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82694
**Weakness:** CWE-287, CWE-306

### Situation
A vulnerability was identified in Tenda AC1206 15.03.06.23. This issue affects the function R7WebsSecurityHandler of the file /goform/ate of the component Web UI. The manipulation leads to missing authentication. The attack can be initiated remotely. The exploit is publicly available and might be used.

### Potential IOCs
- Authentication bypass attempts in access logs
- Logins without corresponding credential validation events
- Sessions created without prior authentication events

### Remediation
- https://github.com/dxz0069/WAVLINK-WN530H4-Command-Injection-in-set_add_routing/blob/main/TENDA-AC1206-ATE-DEFAULT-UNAUTH-002-vulndb.md
- https://vuldb.com/cve/CVE-2026-82694
- https://vuldb.com/submit/894241

---

## CVE-2026-82695 | CVSS 10.0 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82695
**Weakness:** CWE-287, CWE-306

### Situation
A security flaw has been discovered in Tenda AC18 15.03.05.19. Impacted is an unknown function of the file /goform/telnet of the component Telnet Handler. The manipulation results in missing authentication. The attack can be launched remotely. The exploit has been released to the public and may be used for attacks.

### Potential IOCs
- Authentication bypass attempts in access logs
- Logins without corresponding credential validation events
- Sessions created without prior authentication events

### Remediation
- https://github.com/dxz0069/WAVLINK-WN530H4-Command-Injection-in-set_add_routing/blob/main/TENDA-AC18-TELNET-DEFAULT-UNAUTH-001-vulndb.md
- https://vuldb.com/cve/CVE-2026-82695
- https://vuldb.com/submit/894242

---

## CVE-2026-82971 | CVSS 10.0 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82971
**Weakness:** CWE-74, CWE-77

### Situation
A vulnerability was determined in QVidium Opera11 3.3.2a26-Ax4x-opera11. This affects an unknown part of the file /cgi-bin/net_tr.cgi of the component CGI Script. This manipulation of the argument ipaddr causes command injection. The attack may be initiated remotely. The exploit has been publicly disclosed and may be utilized. The vendor explains: "QVidium has now closed its doors and no longer will be able to sell products or provide support." This vulnerability only affects products that are no longer supported by the maintainer.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://uvxbywu62qm.feishu.cn/wiki/Tn2ewwaafigfabkMWJJcc3rhnud?from=from_copylink
- https://vuldb.com/cve/CVE-2026-82971
- https://vuldb.com/submit/880050

---

## CVE-2026-82616 | CVSS 9.9 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82616
**Weakness:** CWE-119, CWE-121

### Situation
A vulnerability was found in TOTOLINK NR1800X 9.1.0u.6681_B20230703. Impacted is the function setUploadSetting of the file /cgi-bin/cstecgi.cgi. The manipulation of the argument FileName results in stack-based buffer overflow. The attack can be executed remotely. The exploit has been made public and could be used.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/lxiansheng488-bit/-/blob/main/TOTOlink/totolink%20setUploadSetting%E6%A0%88%E6%BA%A2%E5%87%BA.pdf
- https://vuldb.com/cve/CVE-2026-82616
- https://vuldb.com/submit/892941

---

## CVE-2026-82874 | CVSS 9.9 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82874
**Weakness:** CWE-639

### Situation
ToolJet before v3.16.208 fails to validate that authenticated users belong to the organization specified in the organizationId path parameter of tooljet-db endpoints, allowing any Builder user to read, modify, and delete tables across tenant boundaries. Attackers can extract victim organization IDs from public app endpoints, then exploit schema operation endpoints to disclose table schemas, plant malicious tables, corrupt existing schemas, or permanently destroy victim data without any relationship to the target organization.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/ToolJet/ToolJet/security/advisories/GHSA-w3hx-rg9g-mw5c
- https://www.vulncheck.com/advisories/tooljet-before-3.16.208-cross-tenant-authorization-bypass-via-tooljet-db

---

## CVE-2026-82689 | CVSS 9.9 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82689
**Weakness:** CWE-77, CWE-78

### Situation
A vulnerability was detected in D-Link DNS-320L, DNS-327L, DNS-340L and DNS-345 up to 20260717. Affected is an unknown function of the file /cgi-bin/isomount_mgr.cgi of the component ISO Image Handler. The manipulation of the argument upIsoRootPath results in os command injection. The attack can be executed remotely. The exploit is now public and may be used.

### Potential IOCs
- Unexpected child processes spawned by the web/app server
- Unusual system command executions in OS audit logs
- New cron jobs or scheduled tasks

### Remediation
- https://github.com/dxz0069/WAVLINK-WN530H4-Command-Injection-in-set_add_routing/blob/main/DLINK-CMD-003-vulndb.md
- https://vuldb.com/cve/CVE-2026-82689
- https://vuldb.com/submit/894201

---

## CVE-2026-82692 | CVSS 9.9 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82692
**Weakness:** CWE-77, CWE-78

### Situation
A vulnerability was found in D-Link DNS-340L and DNS-345 up to 20260717. This affects an unknown part of the file /cgi-bin/iscsi_mgr.cgi. Performing a manipulation of the argument alias/username/password/volume_location results in os command injection. It is possible to initiate the attack remotely. The exploit has been made public and could be used.

### Potential IOCs
- Unexpected child processes spawned by the web/app server
- Unusual system command executions in OS audit logs
- New cron jobs or scheduled tasks

### Remediation
- https://github.com/dxz0069/WAVLINK-WN530H4-Command-Injection-in-set_add_routing/blob/main/DLINK-CMD-006-vulndb.md
- https://vuldb.com/cve/CVE-2026-82692
- https://vuldb.com/submit/894211

---

## CVE-2026-79748 | CVSS 9.9 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-79748
**Weakness:** CWE-862

### Situation
MCPHub is a unified hub for centrally managing and dynamically orchestrating multiple MCP servers/APIs into separate endpoints with flexible routing strategies. Prior to version 0.12.15, the POST /api/servers and PUT /api/servers/:name endpoints in MCPHub create/update MCP server configurations and then immediately spawn the configured stdio process via child_process.spawn. Authentication is required, but there is no authorization check restricting these endpoints to admins, and there is no allowlist/sanitization on the command and args fields. As a result, any authenticated non-admin user can submit a server configuration with command:"/bin/sh" (or any other binary) and arbitrary args, causing MCPHub to execute the attacker-controlled process as the MCPHub server's OS user (commonly root in the published Docker image and in npx/systemd deployments). This issue has been patched in version 0.12.15.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/samanhappy/mcphub/pull/770
- https://github.com/samanhappy/mcphub/releases/tag/v0.12.15
- https://github.com/samanhappy/mcphub/security/advisories/GHSA-mx89-jjx9-gjr8

---

## CVE-2026-82954 | CVSS 9.9 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82954
**Weakness:** CWE-22

### Situation
A vulnerability was detected in Dokploy up to 0.29.7. This issue affects the function writeTraefikConfigInPath of the file packages/server/src/utils/traefik/application.ts of the component Settings. The manipulation of the argument path results in path traversal. The attack can be launched remotely. The exploit is now public and may be used. The vendor was contacted early about this disclosure but did not respond in any way.

### Potential IOCs
- Directory traversal sequences (../) in request paths
- Access to files outside expected document root in logs

### Remediation
- https://vuldb.com/cve/CVE-2026-82954
- https://vuldb.com/submit/879844
- https://vuldb.com/vuln/397303

---

## CVE-2026-83524 | CVSS 9.9 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-83524
**Weakness:** CWE-74, CWE-77

### Situation
A security vulnerability has been detected in RedPort Optimizer wXa-203, Optimizer wXa-213 and Optimizer wXa-223 up to 20260704. This impacts the function exec of the file /xgatev1/system/datetime.php of the component System Clock. The manipulation leads to command injection. The attack may be initiated remotely. The exploit has been disclosed publicly and may be used. The vendor was contacted early about this disclosure but did not respond in any way.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://uvxbywu62qm.feishu.cn/wiki/EA4TwFTx0ih9IhkJX5QcnCmlnSd?from=from_copylink
- https://vuldb.com/cve/CVE-2026-83524
- https://vuldb.com/submit/880051

---

## CVE-2026-82854 | CVSS 9.8 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82854
**Weakness:** CWE-93

### Situation
Nodemailer before 8.0.4 is vulnerable to SMTP command injection through the unsanitized envelope.size parameter. When an application passes a custom envelope object with a size property containing CRLF characters to sendMail(), the value is concatenated into the SMTP MAIL FROM command (as SIZE=...) without sanitization, allowing injection of arbitrary SMTP commands such as RCPT TO to silently add attacker-controlled recipients. Exploitation requires the application to expose the envelope size to attacker-controlled input, as Nodemailer does not include size in the default auto-constructed envelope.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/nodemailer/nodemailer/security/advisories/GHSA-c7w3-x93f-qmm8
- https://www.vulncheck.com/advisories/nodemailer-before-8.0.3-smtp-command-injection-via-envelope-size

---

## CVE-2026-82855 | CVSS 9.8 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82855
**Weakness:** CWE-693

### Situation
@hulumi/policies versions before 1.3.2 contain an evidence validation bypass vulnerability in Cloudflare and deployment-governance validators that allows attackers to suppress violations by submitting unrelated compliant evidence. Attackers can use evidence from different zones, hostnames, origins, or repositories to bypass security guardrails for unrelated resources in the same stack.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/kerberosmansour/hulumi/security/advisories/GHSA-59f3-7227-wmh4
- https://www.vulncheck.com/advisories/hulumi-policies-before-1.3.2-evidence-validation-bypass

---

## CVE-2026-82856 | CVSS 9.8 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82856
**Weakness:** CWE-284

### Situation
@hulumi/policies versions before 1.3.2 fail to properly validate set-qualified AWS IAM condition operators in GitHub OIDC trust policies. Attackers can use ForAnyValue:StringLike operators to hide wildcard GitHub Actions OIDC subject conditions from security guardrails.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/kerberosmansour/hulumi/security/advisories/GHSA-q2f7-m237-v562
- https://www.vulncheck.com/advisories/hulumi-policies-before-1.3.2-oidc-trust-policy-bypass

---

## CVE-2026-82857 | CVSS 9.8 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82857
**Weakness:** CWE-269

### Situation
hulumi versions before v1.3.2 contain a privilege escalation vulnerability in the weekly integration IAM policy that allows role lifecycle operations on af-e2e-* roles without sufficient boundary restrictions. Attackers with the documented principal can create persistent higher-privilege roles in the sandbox account.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/kerberosmansour/hulumi/security/advisories/GHSA-35qr-vx94-m5x3
- https://www.vulncheck.com/advisories/hulumi-before-1.3.2-privilege-escalation-via-iam-policy

---

## CVE-2026-82858 | CVSS 9.8 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82858
**Weakness:** CWE-345

### Situation
@hulumi/drift versions before 1.3.2 accept externally supplied execute plans without sufficient provenance validation, allowing untrusted reconciliation input to be treated as trusted. Attackers can supply malicious execute plans that bypass security checks to perform unsafe reconciliation operations.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/kerberosmansour/hulumi/security/advisories/GHSA-2ffm-hxrq-qqmm
- https://www.vulncheck.com/advisories/hulumi-drift-before-1.3.2-unsafe-execute-plan-acceptance

---

## CVE-2026-82859 | CVSS 9.8 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82859
**Weakness:** CWE-284

### Situation
hulumi versions before v1.3.2 contain a deployment SCP template that allows tag-on-create bypasses for hulumi:iac-role protections. Attackers can bypass intended IAM boundary restrictions by exploiting the weakened SCP template in downstream deployments.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/kerberosmansour/hulumi/security/advisories/GHSA-86q4-r5j3-ff5c
- https://www.vulncheck.com/advisories/hulumi-before-1.3.2-scp-template-tag-on-create-bypass

---

## CVE-2026-82860 | CVSS 9.8 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82860
**Weakness:** CWE-269

### Situation
@hulumi/policies versions before 1.3.2 fail to fully inspect inline and attached IAM policy evidence for the administrator-policy guardrail. Attackers can craft admin-equivalent policy paths that bypass policy evaluation controls.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/kerberosmansour/hulumi/security/advisories/GHSA-4xrh-5m3m-328w
- https://www.vulncheck.com/advisories/hulumi-policies-before-1.3.2-admin-policy-bypass

---

## CVE-2026-73819 | CVSS 9.8 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-73819
**Weakness:** CWE-1390

### Situation
The affected Ebyte 

product's vendor configuration utility permits access to administrative 
functions without verifying the operator's identity under certain 
credential conditions. An unauthenticated attacker on the adjacent 
network could modify critical settings or change access credentials, 
potentially preventing legitimate administrators from managing the 
device.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/cisagov/CSAF/blob/develop/csaf_files/OT/white/2026/icsa-26-237-06.json
- https://www.cisa.gov/news-events/ics-advisories/icsa-26-237-06

---

## CVE-2026-76133 | CVSS 9.8 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-76133
**Weakness:** CWE-327

### Situation
The affected Ebyte 

product
 uses a deprecated hashing algorithm in an authentication-related 
operation. Under conditions where an attacker can manipulate or predict 
the authentication exchange, the weak construction may reduce the 
assurance provided by the authentication mechanism and facilitate 
unauthorized access.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/cisagov/CSAF/blob/develop/csaf_files/OT/white/2026/icsa-26-237-06.json
- https://www.cisa.gov/news-events/ics-advisories/icsa-26-237-06

---

## CVE-2026-82870 | CVSS 9.6 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82870
**Weakness:** CWE-639

### Situation
ToolJet before v3.16.208 fails to validate organizationId ownership in database write and destroy routes, allowing any builder-role user to create, alter, or drop tables in other organizations' databases. Attackers can exploit missing organization-resolving guards to permanently delete tables, insert arbitrary data, and modify schemas across tenant boundaries on shared instances.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/ToolJet/ToolJet/security/advisories/GHSA-xr3w-r926-xfmm
- https://www.vulncheck.com/advisories/tooljet-before-3.16.208-cross-tenant-database-manipulation
- https://github.com/ToolJet/ToolJet/security/advisories/GHSA-xr3w-r926-xfmm

---

## CVE-2026-53552 | CVSS 9.6 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-53552
**Weakness:** CWE-639, CWE-863

### Situation
Goploy is an open-source automation deployment system. In versions 1.17.5 and prior, Project.AddFile, Project.EditFile, Project.RemoveFile, and Project.Edit in cmd/server/api/project/handler.go accept a project or project-file row id from the JSON body and act on it without checking that the project belongs to the caller's namespace. The corresponding model.ProjectFile.GetData and model.Project.GetData queries filter only by row id. A user holding the manager role (or any role that includes the FileSync / EditProject permission) in their own namespace can read, write, or delete files in any project across the install, and can rewrite any project's git remote URL by submitting the foreign id in the body. The git-URL primitive escalates to RCE on the next deploy because Edit runs git remote set-url on the project's working tree. At time of publication, there are no known publicly available patches.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/zhenorzz/goploy/security/advisories/GHSA-26rh-24rg-j3vv

---

## CVE-2026-59111 | CVSS 9.3 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-59111
**Weakness:** CWE-78

### Situation
Improper neutralization of special elements used in an OS command ('OS command injection') vulnerability in Digitální a informační agentura (DIA) eObčanka-Identifikace on MacOS enables an attacker to register a custom URL scheme (czeeopauth://) for parameterized application execution. Prior to version 3.6.0, incoming URL parameters were passed to the compiled AppleScript wrapper using concatenation without sufficient sanitization.

### Potential IOCs
- Unexpected child processes spawned by the web/app server
- Unusual system command executions in OS audit logs
- New cron jobs or scheduled tasks

### Remediation
- https://info.identita.gov.cz/eop/BezpecnostniOznameni/CVE-2026-59111.aspx

---

## CVE-2026-82872 | CVSS 9.1 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82872
**Weakness:** CWE-639

### Situation
ToolJet before v3.16.208 fails to validate that the path organizationId matches the authenticated user's workspace before performing ToolJet DB table operations. A workspace admin can create, view, and delete database tables in another workspace by replacing the organizationId parameter in table-management API requests.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/ToolJet/ToolJet/security/advisories/GHSA-2jhv-482p-4php
- https://www.vulncheck.com/advisories/tooljet-before-3.16.208-cross-workspace-authorization-bypass

---

## CVE-2026-82688 | CVSS 9.1 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82688
**Weakness:** CWE-77, CWE-78

### Situation
A security vulnerability has been detected in D-Link DNS-340L and DNS-345 1.01B04/1.03B06/1.04.B02/1.05b04. This impacts an unknown function of the file /cgi-bin/virtual_vol.cgi of the component Virtual Volume Handler. The manipulation of the argument f_sharename/f_target/f_name leads to os command injection. Remote exploitation of the attack is possible. The exploit has been disclosed publicly and may be used.

### Potential IOCs
- Unexpected child processes spawned by the web/app server
- Unusual system command executions in OS audit logs
- New cron jobs or scheduled tasks

### Remediation
- https://github.com/dxz0069/WAVLINK-WN530H4-Command-Injection-in-set_add_routing/blob/main/DLINK-CMD-001-vulndb.md
- https://vuldb.com/cve/CVE-2026-82688
- https://vuldb.com/submit/894190

---

## CVE-2026-82690 | CVSS 9.1 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82690
**Weakness:** CWE-77, CWE-78

### Situation
A flaw has been found in D-Link DNS-327L and DNS-340L up to 20260717. Affected by this vulnerability is an unknown functionality of the file /cgi-bin/ve_mgr.cgi. This manipulation of the argument f_dev causes os command injection. The attack is possible to be carried out remotely. The exploit has been published and may be used.

### Potential IOCs
- Unexpected child processes spawned by the web/app server
- Unusual system command executions in OS audit logs
- New cron jobs or scheduled tasks

### Remediation
- https://github.com/dxz0069/WAVLINK-WN530H4-Command-Injection-in-set_add_routing/blob/main/DLINK-CMD-004-vulndb.md
- https://vuldb.com/cve/CVE-2026-82690
- https://vuldb.com/submit/894209

---

## CVE-2026-82691 | CVSS 9.1 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82691
**Weakness:** CWE-77, CWE-78

### Situation
A vulnerability has been found in D-Link DNS-320L, DNS-327L, DNS-340L and DNS-345 up to 20260717. Affected by this issue is some unknown functionality of the file /cgi-bin/usb_device.cgi of the component CGI Handler. Such manipulation of the argument f_ups_ip leads to os command injection. The attack may be performed from remote. The exploit has been disclosed to the public and may be used.

### Potential IOCs
- Unexpected child processes spawned by the web/app server
- Unusual system command executions in OS audit logs
- New cron jobs or scheduled tasks

### Remediation
- https://github.com/dxz0069/WAVLINK-WN530H4-Command-Injection-in-set_add_routing/blob/main/DLINK-CMD-005-vulndb.md
- https://vuldb.com/cve/CVE-2026-82691
- https://vuldb.com/submit/894210

---

## CVE-2026-51679 | CVSS 9.1 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-51679
**Weakness:** CWE-284

### Situation
Incorrect access control in the setPasswordCfg function of TOTOLINK T6 4.1.5cu.748_B20211015 allows unauthenticated attackers to change the administrator account via sending a crafted POST request to /cgi-bin/cstecgi.cgi.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/DarkBoulder/CVE-Vendor-Coordination/blob/main/TOTOLINK/README.md
- https://github.com/ShengWu00/CVE-Vendor-Coordination/blob/main/TOTOLINK/README.md
- https://www.totolink.net/

---

## CVE-2026-51680 | CVSS 9.1 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-51680
**Weakness:** CWE-284

### Situation
Incorrect access control in the setLedCfg function of TOTOLINK T6 4.1.5cu.748_B20211015 allows unauthenticated attackers to modify LED behavior via sending a crafted POST request to /cgi-bin/cstecgi.cgi.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/DarkBoulder/CVE-Vendor-Coordination/blob/main/TOTOLINK/README.md
- https://github.com/ShengWu00/CVE-Vendor-Coordination/blob/main/TOTOLINK/README.md
- https://www.totolink.net/

---

## CVE-2026-51681 | CVSS 9.1 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-51681
**Weakness:** CWE-284

### Situation
Incorrect access control in the setRemoteCfg function of TOTOLINK T6 4.1.5cu.748_B20211015 allows unauthenticated attackers to expose WAN-side administration via sending a crafted POST request to /cgi-bin/cstecgi.cgi.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/DarkBoulder/CVE-Vendor-Coordination/blob/main/TOTOLINK/README.md
- https://github.com/ShengWu00/CVE-Vendor-Coordination/blob/main/TOTOLINK/README.md
- https://www.totolink.net/

---

## CVE-2026-51720 | CVSS 9.1 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-51720
**Weakness:** CWE-284

### Situation
Incorrect access control in the delIpPortFilterRules function of TOTOLINK T6 4.1.5cu.748_B20211015 allows unauthenticated attackers to remove firewall filter rules via sending a crafted POST request to /cgi-bin/cstecgi.cgi.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/DarkBoulder/CVE-Vendor-Coordination/blob/main/TOTOLINK/README.md
- https://github.com/ShengWu00/CVE-Vendor-Coordination/blob/main/TOTOLINK/README.md
- https://www.totolink.net/

---

## CVE-2026-51725 | CVSS 9.1 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-51725
**Weakness:** CWE-284

### Situation
Incorrect access control in the NTPSyncWithHost function of TOTOLINK T6 4.1.5cu.748_B20211015 allows unauthenticated attackers to change the device clock via sending a crafted POST request to /cgi-bin/cstecgi.cgi.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/DarkBoulder/CVE-Vendor-Coordination/blob/main/TOTOLINK/README.md
- https://github.com/ShengWu00/CVE-Vendor-Coordination/blob/main/TOTOLINK/README.md
- https://www.totolink.net/

---

## CVE-2026-51730 | CVSS 9.1 CRITICAL

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-51730
**Weakness:** CWE-284

### Situation
Incorrect access control in the delWiFiAclRules function of TOTOLINK T6 4.1.5cu.748_B20211015 allows unauthenticated attackers to remove Wi-Fi ACL rules via sending a crafted POST request to /cgi-bin/cstecgi.cgi.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/DarkBoulder/CVE-Vendor-Coordination/blob/main/TOTOLINK/README.md
- https://github.com/ShengWu00/CVE-Vendor-Coordination/blob/main/TOTOLINK/README.md
- https://www.totolink.net/

---

## CVE-2026-82680 | CVSS 8.8 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82680
**Weakness:** CWE-119, CWE-787

### Situation
A weakness has been identified in D-Link DSM-G600 1.01. This affects an unknown function of the file /load_file.cgi of the component Multipart Handler. Executing a manipulation can lead to out-of-bounds write. The attack may be launched remotely. The exploit has been made available to the public and could be used for attacks.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/dxz0069/WAVLINK-WN530H4-Command-Injection-in-set_add_routing/blob/main/DLINK-BOF-001-vulndb.md
- https://vuldb.com/cve/CVE-2026-82680
- https://vuldb.com/submit/894188

---

## CVE-2026-82217 | CVSS 8.8 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82217
**Weakness:** CWE-22

### Situation
In Eclipse Theia versions 1.73.0 up to but not including 1.75.0, the AI "Agent Mode" file-change tools (writeFileContent, suggestFileContent, and the replacement and state helpers) resolved a model-supplied file path without a workspace-containment check. A crafted relative path such as ../.bashrc, an absolute path, or a ~-expanded path could therefore write or delete files outside the workspace with the privileges of the Theia backend OS user. Because the path argument is influenced by model output, it can be steered through indirect prompt injection, and in Agent Mode writes are applied without a confirmation dialog. Writing to a host-executed file such as a shell startup file or ~/.ssh/authorized_keys can escalate to code execution on the backend.

### Potential IOCs
- Directory traversal sequences (../) in request paths
- Access to files outside expected document root in logs

### Remediation
- https://github.com/eclipse-theia/theia/commit/28da106c254
- https://gitlab.eclipse.org/security/vulnerability-reports/-/work_items/624

---

## CVE-2026-77966 | CVSS 8.8 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-77966
**Weakness:** CWE-862

### Situation
The affected Ebyte 

product does not provide separation between limited and administrative 
management functions. A low privileged authenticated attacker could 
access security sensitive configuration functions and modify settings 
that affect the confidentiality, integrity, or availability of the 
device.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/cisagov/CSAF/blob/develop/csaf_files/OT/white/2026/icsa-26-237-06.json
- https://www.cisa.gov/news-events/ics-advisories/icsa-26-237-06

---

## CVE-2026-79744 | CVSS 8.8 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-79744
**Weakness:** CWE-269, CWE-862

### Situation
MCPHub is a unified hub for centrally managing and dynamically orchestrating multiple MCP servers/APIs into separate endpoints with flexible routing strategies. Prior to version 1.0.29, MCPHub's PUT /api/system-config endpoint (handler updateSystemConfig) performs no authorization check. It is protected only by the app-wide authentication middleware and a rate limiter — it never inspects req.user.isAdmin. This issue has been patched in version 1.0.29.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/samanhappy/mcphub/releases/tag/v1.0.29
- https://github.com/samanhappy/mcphub/security/advisories/GHSA-4gc8-885f-qj36
- https://github.com/samanhappy/mcphub/security/advisories/GHSA-4gc8-885f-qj36

---

## CVE-2026-83596 | CVSS 8.8 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-83596
**Weakness:** CWE-120

### Situation
A flaw was found in WebKitGTK. Processing malicious web content can cause memory corruption due to improper memory handling.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://access.redhat.com/security/cve/CVE-2026-83596
- https://bugs.webkit.org/show_bug.cgi?id=322969
- https://bugzilla.redhat.com/show_bug.cgi?id=2526490

---

## CVE-2026-82882 | CVSS 8.8 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82882
**Weakness:** CWE-862

### Situation
Devtron through 2.2.0 fails to enforce authorization checks on the GET /orchestrator/api-token/webhook endpoint, allowing authenticated users to retrieve admin API tokens. Attackers with any authenticated account can query the endpoint with arbitrary project, environment, and application parameters to retrieve plaintext super-admin JWT tokens for full platform control.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/devtron-labs/devtron
- https://github.com/devtron-labs/devtron/blob/v2.2.0/api/apiToken/ApiTokenRestHandler.go
- https://github.com/devtron-labs/devtron/blob/v2.2.0/pkg/apiToken/ApiTokenService.go

---

## CVE-2026-77348 | CVSS 8.2 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-77348
**Weakness:** CWE-441, CWE-918, CWE-1188

### Situation
Wallos is an open-source, self-hostable personal subscription tracker. Prior to version 5.0.0, the fix for CVE-2026-33407 (GHSA-hhjq-82f8-m6rc, "SSRF via HTTP Proxy Environment Variable") hardened endpoints/logos/search.php by disabling cURL proxying (CURLOPT_PROXY = '' + CURLOPT_NOPROXY = '*'). However, Wallos ships a second, near-identical, unauthenticated logo-image search endpoint — endpoints/payments/search.php — that was not given the same hardening. It still passes the HTTP_PROXY/HTTPS_PROXY environment variable straight into CURLOPT_PROXY. This issue has been patched in version 5.0.0.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/ellite/Wallos/commit/11eaf402e841a628c68a805694227ce66c45f6f3
- https://github.com/ellite/Wallos/releases/tag/v5.0.0
- https://github.com/ellite/Wallos/security/advisories/GHSA-f8j2-qm83-r2w4

---

## CVE-2026-66047 | CVSS 8.1 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-66047
**Weakness:** CWE-306, CWE-330

### Situation
ProfilePress (wp-user-avatar) WordPress plugin before 4.17.2 contains an unauthenticated remote code execution vulnerability that allows unauthenticated attackers to install and activate arbitrary plugins by brute-forcing a weak 32-bit connect token via the ppress_connect_process AJAX handler. Attackers can supply a caller-controlled URL through the file request parameter to trigger silent plugin installation and activation, achieving PHP code execution as the web-server user.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://profilepress.com/changelog/
- https://wordpress.org/plugins/wp-user-avatar/
- https://www.vulncheck.com/advisories/profilepress-wordpress-plugin-unauthenticated-arbitrary-plugin-installation-rce

---

## CVE-2026-82869 | CVSS 7.7 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82869
**Weakness:** CWE-639

### Situation
ToolJet Database versions before v3.16.44 contain a privilege escalation vulnerability in the join_tables endpoint that grants JOIN_TABLES ability to all authenticated users without role or workspace membership validation. Attackers can read arbitrary ToolJet Database tables from any workspace by supplying victim workspace identifiers in the request path while authenticating with their own workspace credentials.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/ToolJet/ToolJet/security/advisories/GHSA-7vj5-wxfm-gmfq
- https://www.vulncheck.com/advisories/tooljet-database-before-3.16.44-privilege-escalation-via-join-tables

---

## CVE-2026-82871 | CVSS 7.7 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82871
**Weakness:** CWE-862

### Situation
ToolJet before v3.16.208 fails to validate organization membership in database read routes, allowing any authenticated user to access other organizations' table schemas and row data. Attackers can supply arbitrary organization IDs in URL parameters to list tables, retrieve column definitions, and execute join queries to read actual stored data from victim organizations.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/ToolJet/ToolJet/security/advisories/GHSA-xqqj-pfc2-vf48
- https://www.vulncheck.com/advisories/tooljet-before-3.16.208-cross-organization-data-read-via-database-routes

---

## CVE-2026-79750 | CVSS 7.7 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-79750
**Weakness:** CWE-639

### Situation
MCPHub is a unified hub for centrally managing and dynamically orchestrating multiple MCP servers/APIs into separate endpoints with flexible routing strategies. Prior to version 1.0.30, MCPHub scopes non-admin users to servers they own (list views and config edits enforce ownership), but the tool-execution API does not. Any authenticated non-admin user can invoke tools on MCP servers owned by other users — servers they cannot even see in GET /api/servers. Because connected MCP servers carry real capability (filesystem, HTTP fetch, cloud APIs with the owner's keys), this is cross-tenant compromise: demonstrated arbitrary host file read (/etc/passwd, another user's secrets) and SSRF. This issue has been patched in version 1.0.30.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/samanhappy/mcphub/releases/tag/v1.0.30
- https://github.com/samanhappy/mcphub/security/advisories/GHSA-wfqf-hqwq-8wvf

---

## CVE-2026-53553 | CVSS 7.7 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-53553
**Weakness:** CWE-22, CWE-200

### Situation
Goploy is an open-source automation deployment system. Prior to version 1.18.0, a severe path traversal vulnerability exists in its backend API endpoints, specifically /deploy/fileDiff (File Compare), when handling file paths provided by the client. This issue has been patched in version 1.18.0.

### Potential IOCs
- Directory traversal sequences (../) in request paths
- Access to files outside expected document root in logs

### Remediation
- http://github.com/zhenorzz/goploy/releases/tag/v1.18.0
- https://github.com/zhenorzz/goploy/commit/d51aa15ebc0a474d9d71d6c453a0fe798dd5e007
- https://github.com/zhenorzz/goploy/security/advisories/GHSA-4g5x-hcwm-82jw

---

## CVE-2026-40463 | CVSS 7.6 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-40463
**Weakness:** CWE-284

### Situation
WaveSuite is affected by an insufficient role-based access control vulnerability in the CPB Log Files feature. Successful exploitation allows an authenticated low-privilege user to load pages restricted to higher-privilege roles by requesting the corresponding URL directly in the browser.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://www.nokia.com/we-are-nokia/security/product-security-advisory/cve-2026-40463/

---

## CVE-2026-82861 | CVSS 7.5 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82861
**Weakness:** CWE-284

### Situation
@hulumi/policies versions before 1.3.2 contain a parent spoof bypass vulnerability that allows attackers to submit spoofed SecureBucket parent evidence during policy evaluation. Attackers can bypass security policy checks by providing falsified evidence, causing the validator to miss unsafe bucket configurations.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/kerberosmansour/hulumi/security/advisories/GHSA-g43v-9x7q-83pq
- https://www.vulncheck.com/advisories/hulumi-policies-before-1.3.2-securebucket-parent-spoof-bypass

---

## CVE-2026-19873 | CVSS 7.5 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-19873
**Weakness:** CWE-770, CWE-1284

### Situation
HTML::FormFu versions through 2.08 for Perl allow resource exhaustion via an unbounded repeat count from the query string in Repeatable elements.

When a Repeatable element has counter_name set, its process method reads the repeat count from the named query string parameter, checks only that it is a positive integer, and passes it to repeat, which deep-clones the element's child subtree once per iteration. Nothing caps the value, and no attribute lets an application impose a limit.

The count is read on every request, before the form decides whether it was submitted, so a plain GET reaches the clone loop with no credentials, no session and no request body. Nesting multiplies: a Repeatable inside a Repeatable takes a counter at each level, so an outer and an inner value of 100 build 10,000 clones.

Once the form is submitted, each cloned field's constraints scan the whole element tree in _find_field_value, so cost grows faster than linearly with the count. A single request exhausts memory and CPU.

The latest release on CPAN is 2.07, from 2018. Version 2.08 exists only in the git repository.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/FormFu/HTML-FormFu/issues/71
- https://security.metacpan.org/patches/H/HTML-FormFu/2.08/CVE-2026-19873-r1.patch
- http://www.openwall.com/lists/oss-security/2026/08/31/7

---

## CVE-2026-82880 | CVSS 7.5 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82880
**Weakness:** CWE-611

### Situation
YaCy Search Server through 1.941 contains an XML external entity injection vulnerability in SVG, FreeMind, and OpenSearch parsers that fail to disable external entity resolution. Attackers can publish malicious documents with DOCTYPE declarations containing SYSTEM entities pointing to local files, causing the crawler to exfiltrate file contents into the searchable index.

### Potential IOCs
- XXE payloads (<!ENTITY) in XML input
- Unexpected outbound DNS or HTTP from the XML parser process

### Remediation
- https://github.com/yacy/yacy_search_server
- https://github.com/yacy/yacy_search_server/blob/Release_1.941/source/net/yacy/document/parser/images/svgParser.java#L72
- https://github.com/yacy/yacy_search_server/blob/Release_1.941/source/net/yacy/document/parser/mmParser.java#L66

---

## CVE-2026-75133 | CVSS 7.5 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-75133
**Weakness:** CWE-306

### Situation
Keep Backup Daily plugin for WordPress before 2.1.4 contains a sensitive information exposure vulnerability that allows unauthenticated attackers to trigger a full MySQL database dump by accessing the publicly exposed `kbd_cron_process` parameter without authentication. Attackers can predict the partially predictable dump filename based on the database name, a limited random range, and the current Unix timestamp to download the generated backup from the publicly accessible uploads directory.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://wordpress.org/plugins/keep-backup-daily/#developers
- https://www.vulncheck.com/advisories/keep-backup-daily-wordpress-plugin-sensitive-information-exposure-via-kbd-cron-process

---

## CVE-2026-54598 | CVSS 7.5 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-54598
**Weakness:** CWE-306

### Situation
Wallos is an open-source, self-hostable personal subscription tracker. Prior to version 4.9.4, endpoints/db/migrate.php executes database schema migrations when called over HTTP with zero authentication. Any unauthenticated attacker can trigger pending migration files against the live SQLite database. This issue has been patched in version 4.9.4.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/ellite/Wallos/releases/tag/v4.9.4
- https://github.com/ellite/Wallos/security/advisories/GHSA-fgfx-rc43-4rr7

---

## CVE-2026-82608 | CVSS 7.4 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82608
**Weakness:** CWE-119, CWE-125

### Situation
A vulnerability was determined in Kamailio up to 5.5.0/6.0.7. This affects the function get_4bytes of the file src/modules/ims_registrar_scscf/cxdx_avp.c of the component AVP Handler. Executing a manipulation can lead to out-of-bounds read. The attack may be performed from remote. The exploit has been publicly disclosed and may be utilized. This patch is called abb5d60af6eefbd367bf6588c5589566b090e272. It is advisable to implement a patch to correct this issue. The vendor points out, that "[v]ersion 5.5.0 is old and not maintained anymore."

### Potential IOCs
- Out-of-bounds read signals in crash reports
- Application crashes or unexpected exits

### Remediation
- https://github.com/Kamailio/Kamailio/commit/abb5d60af6eefbd367bf6588c5589566b090e272
- https://github.com/Kamailio/Kamailio/pull/4823
- https://github.com/kamailio/kamailio/

---

## CVE-2026-82600 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82600
**Weakness:** CWE-74, CWE-89

### Situation
A security flaw has been discovered in SeaCMS up to 13.6. Affected by this issue is some unknown functionality of the file /zyapi.php?ac=videolist. Performing a manipulation of the argument ids results in sql injection. The attack can be initiated remotely. The exploit has been released to the public and may be used for attacks.

### Potential IOCs
- SQL syntax strings in HTTP parameters or logs
- Excessive database error responses (500s)
- Unusual database query volumes or timings

### Remediation
- https://github.com/T-Chachamaru/seacms-13.6-security-advisories/blob/a084a3e573240d54860153321df271280daec262/c-004-zyapi-ids-sql-injection.md
- https://vuldb.com/cve/CVE-2026-82600
- https://vuldb.com/submit/892781

---

## CVE-2026-82607 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82607
**Weakness:** CWE-284, CWE-434

### Situation
A vulnerability was found in Cozmoslabs Profile Builder Plugin up to 3.16.1 on WordPress. The impacted element is the function wppb_ajax_simple_avatar of the file /wp-admin/admin-ajax.php of the component Avatar Simple Upload AJAX Handler. Performing a manipulation results in unrestricted upload. The attack is possible to be carried out remotely. The exploit has been made public and could be used. Upgrading to version 3.16.2 is sufficient to resolve this issue. It is suggested to upgrade the affected component.

### Potential IOCs
- Unexpected file types uploaded to the server
- New executable files in upload directories
- Unexpected outbound connections from upload directories

### Remediation
- https://ciphersecuritylabs.com/research/articles/when-the-browser-is-the-only-bouncer-unauthenticated-media-upload-in-profile-builder
- https://vuldb.com/cve/CVE-2026-82607
- https://vuldb.com/submit/892841

---

## CVE-2026-82610 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82610
**Weakness:** CWE-74, CWE-89

### Situation
A security flaw has been discovered in itsourcecode Online Medicine Delivery System 1.0. Affected is the function Employee::employeeAuthentication of the file /rider/login.php of the component Login Interface. The manipulation of the argument emp_email results in sql injection. It is possible to launch the attack remotely. The exploit has been released to the public and may be used for attacks.

### Potential IOCs
- SQL syntax strings in HTTP parameters or logs
- Excessive database error responses (500s)
- Unusual database query volumes or timings

### Remediation
- https://github.com/boyslikesports/202607_vul_dir/blob/main/C-01-SQLi-Employee-Auth-Bypass_en.md
- https://itsourcecode.com/
- https://vuldb.com/cve/CVE-2026-82610

---

## CVE-2026-82611 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82611
**Weakness:** CWE-74, CWE-89

### Situation
A weakness has been identified in itsourcecode Online Medicine Delivery System 1.0. Affected by this vulnerability is the function Customer::cusAuthentication of the file /login.php of the component Customer Login Interface. This manipulation of the argument U_USERNAME causes sql injection. The attack can be initiated remotely. The exploit has been made available to the public and could be used for attacks.

### Potential IOCs
- SQL syntax strings in HTTP parameters or logs
- Excessive database error responses (500s)
- Unusual database query volumes or timings

### Remediation
- https://github.com/boyslikesports/202607_vul_dir/blob/main/C-02-SQLi-Customer-Auth-Bypass_en.md
- https://itsourcecode.com/
- https://vuldb.com/cve/CVE-2026-82611

---

## CVE-2026-82612 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82612
**Weakness:** CWE-74, CWE-89

### Situation
A security vulnerability has been detected in itsourcecode Online Medicine Delivery System 1.0. Affected by this issue is the function loadResultList of the file /index.php?q=single-item of the component Product Detail Page. Such manipulation of the argument ID leads to sql injection. The attack can be launched remotely. The exploit has been disclosed publicly and may be used.

### Potential IOCs
- SQL syntax strings in HTTP parameters or logs
- Excessive database error responses (500s)
- Unusual database query volumes or timings

### Remediation
- https://github.com/boyslikesports/202607_vul_dir/blob/main/C-03-SQLi-Single-Item-ID_en.md
- https://itsourcecode.com/
- https://vuldb.com/cve/CVE-2026-82612

---

## CVE-2026-82613 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82613
**Weakness:** CWE-74, CWE-89

### Situation
A vulnerability was detected in itsourcecode Online Medicine Delivery System 1.0. This affects the function loadResultList of the file /index.php?q=product of the component Product Search Interface. Performing a manipulation of the argument Search results in sql injection. The attack may be initiated remotely. The exploit is now public and may be used.

### Potential IOCs
- SQL syntax strings in HTTP parameters or logs
- Excessive database error responses (500s)
- Unusual database query volumes or timings

### Remediation
- https://github.com/boyslikesports/202607_vul_dir/blob/main/C-04-SQLi-Product-Search-LIKE_en.md
- https://itsourcecode.com/
- https://vuldb.com/cve/CVE-2026-82613

---

## CVE-2026-82614 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82614
**Weakness:** CWE-74, CWE-89

### Situation
A flaw has been found in itsourcecode Online Medicine Delivery System 1.0. This vulnerability affects the function loadResultList of the file /index.php?q=product of the component Product Category Filter Interface. Executing a manipulation of the argument Category can lead to sql injection. The attack may be launched remotely. The exploit has been published and may be used.

### Potential IOCs
- SQL syntax strings in HTTP parameters or logs
- Excessive database error responses (500s)
- Unusual database query volumes or timings

### Remediation
- https://github.com/boyslikesports/202607_vul_dir/blob/main/C-05-SQLi-Product-Category_en.md
- https://itsourcecode.com/
- https://vuldb.com/cve/CVE-2026-82614

---

## CVE-2026-82615 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82615
**Weakness:** CWE-74, CWE-89

### Situation
A vulnerability has been found in itsourcecode Online Medicine Delivery System 1.0. This issue affects the function Customer::find_phone of the file /passwordrecover.php of the component Password Recovery Interface. The manipulation of the argument phonenumber leads to sql injection. Remote exploitation of the attack is possible. The exploit has been disclosed to the public and may be used.

### Potential IOCs
- SQL syntax strings in HTTP parameters or logs
- Excessive database error responses (500s)
- Unusual database query volumes or timings

### Remediation
- https://github.com/boyslikesports/202607_vul_dir/blob/main/C-06-SQLi-Password-Recover_en.md
- https://itsourcecode.com/
- https://vuldb.com/cve/CVE-2026-82615

---

## CVE-2026-82621 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82621
**Weakness:** CWE-285, CWE-639

### Situation
A weakness has been identified in Soarkey StudentManagement and 学生信息管理系统 up to e08f7f1d5015af407aa4cca0ada3dea189b4937e. This impacts the function AdminDao.doGet of the file code/src/service/AdminDao.java of the component Administrative Servlet. Executing a manipulation of the argument action can lead to authorization bypass. It is possible to launch the attack remotely. The exploit has been made available to the public and could be used for attacks. The project was informed of the problem early through an issue report but has not responded yet.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/Soarkey/StudentManagement/
- https://github.com/Soarkey/StudentManagement/issues/32
- https://vuldb.com/cve/CVE-2026-82621

---

## CVE-2026-82630 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82630
**Weakness:** CWE-918

### Situation
A vulnerability was identified in PowerJob up to 5.1.2. Impacted is the function MuConnectionManager.getOrCreateConnection of the file powerjob-server/powerjob-server-starter/src/main/java/tech/powerjob/server/web/controller/TestController.java of the component Transport Endpoint. The manipulation leads to server-side request forgery. The attack is possible to be carried out remotely. The exploit is publicly available and might be used. The project was informed of the problem early through an issue report but has not responded yet.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/PowerJob/PowerJob/
- https://github.com/PowerJob/PowerJob/issues/1181
- https://vuldb.com/cve/CVE-2026-82630

---

## CVE-2026-82668 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82668
**Weakness:** CWE-77, CWE-78

### Situation
A security vulnerability has been detected in klaussilveira GitList 2.0.0. Affected by this vulnerability is the function getDefaultBranch of the file src/SCM/System/Git/CommandLine.php of the component Git Command Line. Such manipulation leads to os command injection. The attack can be executed remotely. The exploit has been disclosed publicly and may be used. Upgrading to version 3.0.0-beta addresses this issue. The name of the patch is 88cf2866083d5f7c20d9d565c45f828a7ad1516b. Upgrading the affected component is advised.

### Potential IOCs
- Unexpected child processes spawned by the web/app server
- Unusual system command executions in OS audit logs
- New cron jobs or scheduled tasks

### Remediation
- https://github.com/klaussilveira/gitlist/
- https://github.com/klaussilveira/gitlist/commit/88cf2866083d5f7c20d9d565c45f828a7ad1516b
- https://github.com/klaussilveira/gitlist/issues/947

---

## CVE-2026-82701 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82701
**Weakness:** CWE-74, CWE-89

### Situation
A vulnerability was determined in code-projects Online Shopping System 1.0. Affected by this issue is some unknown functionality of the file /action.php of the component Search Functionality. This manipulation of the argument keyword causes sql injection. It is possible to initiate the attack remotely. The exploit has been publicly disclosed and may be utilized.

### Potential IOCs
- SQL syntax strings in HTTP parameters or logs
- Excessive database error responses (500s)
- Unusual database query volumes or timings

### Remediation
- https://code-projects.org/
- https://github.com/ahmadmarz10-hub/CVEsMarz/blob/main/Time-Based%20Blind%20SQL%20Injection%20in%20Online%20Shopping%20System%20%60keyword%60%20Parameter.md
- https://vuldb.com/cve/CVE-2026-82701

---

## CVE-2026-82801 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82801
**Weakness:** CWE-918

### Situation
A vulnerability was detected in NASA earthdata-search 1.0.0. Affected by this vulnerability is the function scaleImage of the file serverless/src/scaleImage/handler.js of the component scale Endpoint. Performing a manipulation results in server-side request forgery. The attack can be initiated remotely. The exploit is now public and may be used. The vendor was contacted early about this disclosure but did not respond in any way.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/natanmorette-thoropass/thoropass-vuln-research-program/tree/main/2026/Unauthenticated%20Scale%20Image%20SSRF
- https://vuldb.com/cve/CVE-2026-82801
- https://vuldb.com/submit/881731

---

## CVE-2026-82808 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82808
**Weakness:** CWE-259, CWE-798

### Situation
A vulnerability was identified in Inbox Foundry ActiveInbox Extension up to 7.10.24 on Chrome. Impacted is an unknown function of the file dist/service-worker.production-esm.js of the component Google OAuth Client Secret. Such manipulation leads to hard-coded credentials. The attack can be executed remotely. The exploit is publicly available and might be used. The vendor was informed beforehand about the issue. The support explains, that "[a]t the moment, the [bug bounty] programme is on hold while we work through a large number of existing reports."

### Potential IOCs
- Successful logins from unexpected IPs using default credentials
- Brute-force attempts against known default accounts

### Remediation
- https://github.com/xryj920/chrome_extensions/blob/main/The%20Inbox%20Foundry%20Limited%20ActiveInbox%207.10.24%20ships%20a%20hardcoded%20Google%20OAuth%20client%20secret%20in%20the%20Chrome%20extension%20bundle
- https://vuldb.com/cve/CVE-2026-82808
- https://vuldb.com/submit/874121

---

## CVE-2026-82815 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82815
**Weakness:** CWE-266, CWE-284

### Situation
A flaw has been found in MegaEase EaseProbe up to 2.3.0. Affected is the function realIP of the file web/server.go of the component Middleware. This manipulation of the argument X-Forwarded-For/X-Real-IP/True-Client-IP causes improper access controls. The attack can be initiated remotely. The exploit has been published and may be used. The vendor was contacted early about this disclosure but did not respond in any way.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/BiBi8BoBo/megaease_easeprobe-unvalidated-X-Forwarded-For-header
- https://vuldb.com/cve/CVE-2026-82815
- https://vuldb.com/submit/875371

---

## CVE-2026-82914 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82914
**Weakness:** CWE-74, CWE-89

### Situation
A security flaw has been discovered in kishan0725 Hospital-Management-System 1.0. This vulnerability affects unknown code of the file /search.php. The manipulation of the argument Contact results in sql injection. It is possible to launch the attack remotely. The exploit has been released to the public and may be used for attacks. The vendor was contacted early about this disclosure but did not respond in any way.

### Potential IOCs
- SQL syntax strings in HTTP parameters or logs
- Excessive database error responses (500s)
- Unusual database query volumes or timings

### Remediation
- https://uvxbywu62qm.feishu.cn/wiki/NKztwPKs3i07urk5hARcG6venZ7?from=from_copylink
- https://vuldb.com/cve/CVE-2026-82914
- https://vuldb.com/submit/878520

---

## CVE-2026-82919 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82919
**Weakness:** CWE-287, CWE-306

### Situation
A vulnerability was identified in cu silicon up to 0.1.5. Affected by this vulnerability is the function create_app of the file views.py of the component edit Endpoint. Such manipulation leads to missing authentication. The attack may be performed from remote. The exploit is publicly available and might be used. The vendor was contacted early about this disclosure but did not respond in any way.

### Potential IOCs
- Authentication bypass attempts in access logs
- Logins without corresponding credential validation events
- Sessions created without prior authentication events

### Remediation
- https://vuldb.com/cve/CVE-2026-82919
- https://vuldb.com/submit/879029
- https://vuldb.com/vuln/397299

---

## CVE-2026-82921 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82921
**Weakness:** CWE-284, CWE-434

### Situation
A weakness has been identified in ShopEx ECShop up to 2.5.1. This affects the function check_img_type of the file admin/pack.php. Executing a manipulation of the argument pack_img can lead to unrestricted upload. It is possible to launch the attack remotely. The exploit has been made available to the public and could be used for attacks. The vendor was contacted early about this disclosure but did not respond in any way.

### Potential IOCs
- Unexpected file types uploaded to the server
- New executable files in upload directories
- Unexpected outbound connections from upload directories

### Remediation
- https://uvxbywu62qm.feishu.cn/wiki/TNENwNItlitygtk2uABcj02lndc?from=from_copylink
- https://vuldb.com/cve/CVE-2026-82921
- https://vuldb.com/submit/879229

---

## CVE-2026-82922 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82922
**Weakness:** CWE-74, CWE-89

### Situation
A security vulnerability has been detected in ShopEx ECShop up to 2.5.1. This vulnerability affects the function flow_update_cart of the file /flow.php?step=update_cart. The manipulation of the argument rec_id leads to sql injection. The attack can be initiated remotely. The exploit has been disclosed publicly and may be used. The vendor was contacted early about this disclosure but did not respond in any way.

### Potential IOCs
- SQL syntax strings in HTTP parameters or logs
- Excessive database error responses (500s)
- Unusual database query volumes or timings

### Remediation
- https://uvxbywu62qm.feishu.cn/wiki/NWyrwRgmgi9DxDk5Hy1cARKfnsc?from=from_copylink
- https://vuldb.com/cve/CVE-2026-82922
- https://vuldb.com/submit/879242

---

## CVE-2026-82957 | CVSS 7.3 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82957
**Weakness:** CWE-918

### Situation
A vulnerability was found in hyperledger-firefly firefly up to 1.4.0. The impacted element is the function ValidateOptions of the file internal/events/webhooks/webhooks.go of the component Webhook Subscription. Performing a manipulation of the argument url results in server-side request forgery. Remote exploitation of the attack is possible. The exploit has been made public and could be used. The vendor was contacted early about this disclosure but did not respond in any way.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://vuldb.com/cve/CVE-2026-82957
- https://vuldb.com/submit/879847
- https://vuldb.com/vuln/397306

---

## CVE-2026-82659 | CVSS 7.1 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82659
**Weakness:** CWE-73

### Situation
nodemailer before 9.0.1 fails to apply disableFileAccess and disableUrlAccess flags to message-level raw option, allowing authenticated attackers to read arbitrary files or perform server-side request forgery by supplying path or href properties. Attackers can exploit this by crafting raw messages with file paths or URLs that bypass the intended sandbox, with fetched content delivered in the outgoing message to attacker-controlled recipients.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/nodemailer/nodemailer/security/advisories/GHSA-p6gq-j5cr-w38f
- https://www.vulncheck.com/advisories/nodemailer-before-9.0.1-file-read-and-ssrf-via-raw-option

---

## CVE-2026-79747 | CVSS 7.1 HIGH

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-79747
**Weakness:** CWE-918

### Situation
MCPHub is a unified hub for centrally managing and dynamically orchestrating multiple MCP servers/APIs into separate endpoints with flexible routing strategies. Prior to version 1.0.32, an authenticated non-admin user can register a server pointing at an arbitrary URL and make the hub issue server-side requests to it, with no egress filtering (no block of loopback / RFC1918 / link-local 169.254.0.0/16). Via the OpenAPI proxy path the response body is returned to the caller (full, reflected SSRF); via the SSE/streamable-http transport the request is sent blind. This issue has been patched in version 1.0.32.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/samanhappy/mcphub/releases/tag/v1.0.32
- https://github.com/samanhappy/mcphub/security/advisories/GHSA-9wx9-prgc-gmjr
- https://github.com/samanhappy/mcphub/security/advisories/GHSA-9wx9-prgc-gmjr

---

## CVE-2026-82866 | CVSS 6.8 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82866
**Weakness:** CWE-918

### Situation
@pdfme/common before 5.5.10 contains a server-side request forgery vulnerability in the getB64BasePdf function that fetches arbitrary URLs without validation when basePdf is attacker-controlled. Attackers who control the basePdf template field can force servers or clients to make requests to internal endpoints, enabling metadata exfiltration, network reconnaissance, and blind request forgery attacks.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/pdfme/pdfme/security/advisories/GHSA-pgx6-7jcq-2qff
- https://www.vulncheck.com/advisories/pdfme-common-before-5.5.10-ssrf-via-unvalidated-url-fetch

---

## CVE-2026-82702 | CVSS 6.6 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82702
**Weakness:** CWE-77, CWE-78

### Situation
A vulnerability was identified in Edimax BR-6214K 1.40. This affects the function system of the file www/wlanMP.asp of the component asp_WlanMP Endpoint. Such manipulation of the argument ateFunc leads to os command injection. It is possible to launch the attack remotely. The exploit is publicly available and might be used. The vendor was contacted early about this disclosure but did not respond in any way.

### Potential IOCs
- Unexpected child processes spawned by the web/app server
- Unusual system command executions in OS audit logs
- New cron jobs or scheduled tasks

### Remediation
- https://github.com/dxz0069/WAVLINK-WN530H4-Command-Injection-in-set_add_routing/blob/main/Edimax-WlanMP__Edimax__other.md
- https://vuldb.com/cve/CVE-2026-82702
- https://vuldb.com/submit/881275

---

## CVE-2026-82703 | CVSS 6.6 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82703
**Weakness:** CWE-77, CWE-78

### Situation
A security flaw has been discovered in Edimax BR-6214K 1.40. This vulnerability affects the function system of the file www/ping.asp of the component asp_setPing Endpoint. Performing a manipulation of the argument pingstr results in os command injection. The attack can be initiated remotely. The exploit has been released to the public and may be used for attacks. The vendor was contacted early about this disclosure but did not respond in any way.

### Potential IOCs
- Unexpected child processes spawned by the web/app server
- Unusual system command executions in OS audit logs
- New cron jobs or scheduled tasks

### Remediation
- https://github.com/dxz0069/WAVLINK-WN530H4-Command-Injection-in-set_add_routing/blob/main/Edimax-setPing__Edimax__other.md
- https://vuldb.com/cve/CVE-2026-82703
- https://vuldb.com/submit/881276

---

## CVE-2026-82662 | CVSS 6.5 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82662
**Weakness:** CWE-295

### Situation
Nodemailer before 8.0.8 disables TLS certificate verification in lib/fetch/index.js through rejectUnauthorized: false, allowing attackers to intercept OAuth2 token requests. Attackers in a machine-in-the-middle position can capture OAuth client secrets, refresh tokens, and access tokens transmitted over compromised HTTPS connections.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/nodemailer/nodemailer/security/advisories/GHSA-r7g4-qg5f-qqm2
- https://www.vulncheck.com/advisories/nodemailer-before-8.0.8-tls-certificate-validation-bypass

---

## CVE-2026-82864 | CVSS 6.5 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82864
**Weakness:** CWE-409

### Situation
pdfme pdf-lib versions before 5.5.10 contain an unbounded buffer growth vulnerability in the DecodeStream.ensureBuffer() method that allows attackers to cause denial of service by supplying a crafted PDF with a FlateDecode stream containing a decompression bomb. Attackers can upload a small compressed PDF that decompresses to hundreds of megabytes, exhausting memory and crashing the Node.js process or freezing browser tabs during PDF parsing.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/pdfme/pdfme/security/advisories/GHSA-vrqm-gvq7-rrwh
- https://www.vulncheck.com/advisories/pdfme-pdf-lib-before-5.5.10-denial-of-service-via-decompression-bomb

---

## CVE-2026-82877 | CVSS 6.5 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82877
**Weakness:** CWE-22

### Situation
ILIAS versions before 9.22, 10.0 through 10.9, and 11.0 through 11.2 contain an arbitrary file read vulnerability in the SOAP addFile method that allows authenticated users to read server files by supplying crafted XML with COPY-mode imports. Attackers can construct absolute file paths through an unsandboxed import directory and retrieve sensitive files including configuration files containing database credentials and setup passwords.

### Potential IOCs
- Directory traversal sequences (../) in request paths
- Access to files outside expected document root in logs

### Remediation
- https://github.com/ILIAS-eLearning/ILIAS
- https://github.com/ILIAS-eLearning/ILIAS/blob/v11.2/components/ILIAS/File/classes/class.ilFileXMLParser.php#L244
- https://github.com/ILIAS-eLearning/ILIAS/blob/v11.2/components/ILIAS/soap/classes/class.ilSoapFileAdministration.php#L56

---

## CVE-2026-75132 | CVSS 6.5 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-75132
**Weakness:** CWE-89

### Situation
WAPT Server versions 2.6.1.17834 and earlier contains a SQL injection vulnerability in the `columns` parameter of the GET `/api/v3/hosts` endpoint. A remote authenticated user with read-only privileges can inject arbitrary PostgreSQL expressions into the SQL query constructed by WAPT. By exploiting the injection point, an attacker can inject additional PostgreSQL statements, bypass the host scope restrictions applied to the account, and read information from other rows or tables within the database.

### Potential IOCs
- SQL syntax strings in HTTP parameters or logs
- Excessive database error responses (500s)
- Unusual database query volumes or timings

### Remediation
- https://www.vulncheck.com/advisories/wapt-server-sql-injection-via-api-v3-hosts-endpoint
- https://www.wapt.fr/en/doc/wapt-changelog.html

---

## CVE-2023-20511 | CVSS 6.4 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2023-20511
**Weakness:** CWE-763

### Situation
Release of an invalid pointer in the AMD kernel mode driver (KMD) could allow a privileged attacker to create a double free condition potentially leading to arbitrary code execution.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://www.amd.com/en/resources/product-security/bulletin/AMD-SB-6018.html

---

## CVE-2026-82609 | CVSS 6.3 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82609
**Weakness:** CWE-74, CWE-89

### Situation
A vulnerability was identified in itsourcecode Sales and Inventory System 1.0. This impacts an unknown function of the file /pages/inv_edit.php. The manipulation of the argument ID leads to sql injection. It is possible to initiate the attack remotely. The exploit is publicly available and might be used.

### Potential IOCs
- SQL syntax strings in HTTP parameters or logs
- Excessive database error responses (500s)
- Unusual database query volumes or timings

### Remediation
- https://github.com/ltranquility/submit_repository/issues/1
- https://itsourcecode.com/
- https://vuldb.com/cve/CVE-2026-82609

---

## CVE-2026-82620 | CVSS 6.3 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82620
**Weakness:** CWE-74, CWE-89

### Situation
A security flaw has been discovered in Soarkey StudentManagement and 学生信息管理系统 up to e08f7f1d5015af407aa4cca0ada3dea189b4937e. This affects the function CourseDao.course_ranking of the file code/src/dao/CourseDao.java. Performing a manipulation of the argument cno results in sql injection. It is possible to initiate the attack remotely. The exploit has been released to the public and may be used for attacks. The project was informed of the problem early through an issue report but has not responded yet.

### Potential IOCs
- SQL syntax strings in HTTP parameters or logs
- Excessive database error responses (500s)
- Unusual database query volumes or timings

### Remediation
- https://github.com/Soarkey/StudentManagement/
- https://github.com/Soarkey/StudentManagement/issues/33
- https://vuldb.com/cve/CVE-2026-82620

---

## CVE-2026-53620 | CVSS 6.3 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-53620
**Weakness:** CWE-639

### Situation
GROWI contains a vulnerability with an authorization bypass through user-controlled key in the bookmark folder APIs. If this vulnerability is exploited, an authenticated attacker could retrieve, tamper with, and/or delete the other user's bookmark data.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://growi.co.jp/news/46/
- https://jvn.jp/en/jp/JVN42348352/

---

## CVE-2026-82679 | CVSS 6.3 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82679
**Weakness:** CWE-284, CWE-434

### Situation
A security flaw has been discovered in diem-project diem up to 5.1.3. The impacted element is an unknown function of the file dmFrontPlugin/lib/dmWidget/media/dmWidgetContentBaseMediaForm.php of the component Widget Editor. Performing a manipulation results in unrestricted upload. The attack may be initiated remotely. The exploit has been released to the public and may be used for attacks. The project was informed of the problem early through an issue report but has not responded yet.

### Potential IOCs
- Unexpected file types uploaded to the server
- New executable files in upload directories
- Unexpected outbound connections from upload directories

### Remediation
- https://github.com/diem-project/diem/
- https://github.com/diem-project/diem/issues/448
- https://vuldb.com/cve/CVE-2026-82679

---

## CVE-2026-82878 | CVSS 6.3 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82878
**Weakness:** CWE-862

### Situation
DataEase versions before 2.10.26 omit object-level authorization checks on geographic information, dashboard linkage, and chart detail REST endpoints, allowing authenticated users to access resources belonging to other users. Attackers can overwrite or delete map geometry, modify dashboard linkages, and retrieve chart metadata and configuration for resources they do not own by supplying arbitrary identifiers in requests.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/dataease/dataease
- https://github.com/dataease/dataease/commit/5fe46c489876d5decdfcde36d20b1c618d472cbb
- https://github.com/dataease/dataease/releases/tag/v2.10.26

---

## CVE-2026-82879 | CVSS 6.3 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82879
**Weakness:** CWE-863

### Situation
DataEase before 2.10.26 contains multiple access control defects in the sharing link module. Tickets are not bound to the target share UUID, so a valid ticket issued for one share can be reused against another (ShareTicketManage.validateTicket / POST /de2api/share/proxyInfo). The POST /de2api/share/validate endpoint issues a LinkToken after password verification without requiring a ticket, bypassing the 'ticket mandatory' policy. Additionally, the ticket create and delete endpoints (POST /de2api/ticket/saveTicket, POST /de2api/ticket/delTicket) lack share-ownership checks, allowing an authenticated user who knows another user's ticket to modify, rebind, or delete it (denial of service), and GET /de2api/share/queryRelationByUserId/{uid} allows authenticated users to enumerate other users' share mappings.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/dataease/dataease
- https://github.com/dataease/dataease/commit/fbbb0482c4c10480c2dd4ecc050cd1e5c55b17db
- https://github.com/dataease/dataease/releases/tag/v2.10.26

---

## CVE-2026-82696 | CVSS 6.3 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82696
**Weakness:** CWE-74, CWE-89

### Situation
A weakness has been identified in itsourcecode Sales and Inventory System 1.0. The affected element is an unknown function of the file /pages/inv_searchfrm.php. This manipulation of the argument ID causes sql injection. The attack may be initiated remotely. The exploit has been made available to the public and could be used for attacks.

### Potential IOCs
- SQL syntax strings in HTTP parameters or logs
- Excessive database error responses (500s)
- Unusual database query volumes or timings

### Remediation
- https://github.com/ltranquility/submit_repository/issues/2
- https://itsourcecode.com/
- https://vuldb.com/cve/CVE-2026-82696

---

## CVE-2026-82816 | CVSS 6.3 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82816
**Weakness:** CWE-285, CWE-639

### Situation
A vulnerability has been found in dibo-software diboot 3.8.0. Affected by this vulnerability is an unknown functionality of the file /api/ai-session/ of the component AI Session Endpoint. Such manipulation leads to authorization bypass. The attack can be launched remotely. The exploit has been disclosed to the public and may be used. The vendor was contacted early about this disclosure but did not respond in any way.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://drive.google.com/file/d/1-q66DxWFxQNmYF-1lzkHOodibWmZlGA0/view?usp=sharing
- https://vuldb.com/cve/CVE-2026-82816
- https://vuldb.com/submit/876017

---

## CVE-2026-82817 | CVSS 6.3 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82817
**Weakness:** CWE-266, CWE-284

### Situation
A vulnerability was found in dibo-software diboot 3.8.0. Affected by this issue is some unknown functionality of the file /admin/ of the component Tenant Administrator Management API. Performing a manipulation of the argument tenantId results in improper access controls. The attack may be initiated remotely. The exploit has been made public and could be used. The vendor was contacted early about this disclosure but did not respond in any way.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://drive.google.com/file/d/1D9XNhOV7wkc4dl2M59hTML0pmVF9irbi/view?usp=sharing
- https://vuldb.com/cve/CVE-2026-82817
- https://vuldb.com/submit/876018

---

## CVE-2026-82818 | CVSS 6.3 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82818
**Weakness:** CWE-266, CWE-284

### Situation
A vulnerability was determined in dibo-software diboot 3.8.0. This affects an unknown part of the file /api/iam/tenant/resource of the component Tenant Resource Assignment Handler. Executing a manipulation of the argument tenantId can lead to improper access controls. The attack may be launched remotely. The exploit has been publicly disclosed and may be utilized. The vendor was contacted early about this disclosure but did not respond in any way.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://drive.google.com/file/d/1qFtwq78JN5Af3GlSD2utfQIbOPBaaQ47/view?usp=sharing
- https://vuldb.com/cve/CVE-2026-82818
- https://vuldb.com/submit/876019

---

## CVE-2026-82833 | CVSS 6.3 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82833
**Weakness:** CWE-266, CWE-284

### Situation
A vulnerability was identified in Doccano Open Source Annotation Tools for Machine Learning Practitioners and Auto Labeling Pipeline Module to Annotate a Document Automatically up to 1.8.5. Affected by this issue is the function ExampleDetail of the file /v1/projects/1/examples/ of the component Project Example Detail Endpoint. Such manipulation leads to improper access controls. The attack may be launched remotely. The exploit is publicly available and might be used. The vendor was contacted early about this disclosure but did not respond in any way.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://drive.google.com/file/d/1gqrFfbP7dSSp4Pf-4iEoPtNR7WjSZPML/view?usp=drive_link
- https://vuldb.com/cve/CVE-2026-82833
- https://vuldb.com/submit/876617

---

## CVE-2026-82905 | CVSS 6.3 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82905
**Weakness:** CWE-918

### Situation
A vulnerability was detected in sdcb chats up to 1.12.0. This affects the function McpController of the file src/BE/web/Controllers/Users/Mcps/McpController.cs of the component fetch-tools Endpoint. The manipulation results in server-side request forgery. The attack may be launched remotely. The exploit is now public and may be used. The vendor was contacted early about this disclosure but did not respond in any way.

### Potential IOCs
- Unexpected outbound network connections from the affected service
- Unusual process creation or privilege escalation events
- New or modified files in application directories
- Spike in error rates or application crashes around the affected component

### Remediation
- https://github.com/yaowenxiao721/Poc/blob/main/sdcb-chats/chats-poc-1.md
- https://vuldb.com/cve/CVE-2026-82905
- https://vuldb.com/submit/877764

---

## CVE-2026-82867 | CVSS 6.1 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82867
**Weakness:** CWE-79

### Situation
@pdfme/schemas before 5.5.9 contains a cross-site scripting vulnerability in the Select schema plugin that fails to sanitize option values before interpolating them into HTML via innerHTML. Attackers can supply malicious templates with crafted option values containing HTML and JavaScript to execute arbitrary code in users' browsers.

### Potential IOCs
- Script tags or encoded JS in user-supplied input
- Unexpected outbound requests from client browsers
- CSP violation reports

### Remediation
- https://github.com/pdfme/pdfme/security/advisories/GHSA-qq9g-96v4-m3cj
- https://www.vulncheck.com/advisories/pdfme-schemas-before-5.5.9-cross-site-scripting-via-select

---

## CVE-2026-82868 | CVSS 6.1 MEDIUM

**NVD:** https://nvd.nist.gov/vuln/detail/CVE-2026-82868
**Weakness:** CWE-79

### Situation
@pdfme/schemas before 5.5.9 contains a cross-site scripting vulnerability in the SVG schema plugin that renders user-supplied SVG content directly to innerHTML without sanitization. Attackers can inject malicious SVG with embedded scripts, event handlers, or foreignObject elements to execute arbitrary JavaScript in users' browsers when viewing or filling templates.

### Potential IOCs
- Script tags or encoded JS in user-supplied input
- Unexpected outbound requests from client browsers
- CSP violation reports

### Remediation
- https://github.com/pdfme/pdfme/security/advisories/GHSA-87v3-4cfp-cm76
- https://www.vulncheck.com/advisories/pdfme-schemas-before-5.5.9-cross-site-scripting-via-svg
- https://github.com/pdfme/pdfme/security/advisories/GHSA-87v3-4cfp-cm76

---

