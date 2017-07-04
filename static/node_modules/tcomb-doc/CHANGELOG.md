# Changelog

> **Tags:**
> - [New Feature]
> - [Bug Fix]
> - [Breaking Change]
> - [Documentation]
> - [Internal]
> - [Polish]
> - [Experimental]

**Note**: Gaps between patch versions are faulty/broken releases.
**Note**: A feature tagged as Experimental is in a high state of flux, you're at risk of it changing without notice.

## v0.5.2

- **New Feature**
  - add support for default props (tcomb v3.2)

# v0.5.1

- **New Feature**
  - support `tcomb` ^3.1.0, fix #6

# v0.5.0

**Warning**. If you don't rely in your codebase on the property `maybe(MyType)(undefined) === null` this **is not a breaking change** for you.

- **Breaking Change**
  - upgrade to `tcomb` v3.0.0

# v0.4.0

- **Breaking Change**
  - upgrade to `tcomb` v2.5.2, fix #3