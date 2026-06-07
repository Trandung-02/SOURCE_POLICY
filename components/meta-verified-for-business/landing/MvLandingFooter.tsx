'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

export default function MvLandingFooter() {
  const t = useLandingStrings()
  const year = new Date().getFullYear()

  return (
    <footer className="mv-hc-footer w-full">
      <div className="mv-hc-wrap">
        <div className="mv-hc-footer-grid">
          {t.footer.columns.map((col) => (
            <div key={col.title} className="mv-hc-footer-col">
              <p className="mv-hc-footer-col-title">{col.title}</p>
              <ul className="mv-hc-footer-links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <span className="mv-hc-footer-link">{link.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mv-hc-footer-legal">
          <span className="mv-hc-footer-legal-link">{t.footer.privacy}</span>
          <span className="mv-hc-footer-legal-sep" aria-hidden="true">
            ·
          </span>
          <span className="mv-hc-footer-legal-link">{t.footer.terms}</span>
        </div>

        <p className="mv-hc-footer-copy">
          {t.footer.copyright} {year}
          <br />
          {t.footer.address}
        </p>
      </div>
    </footer>
  )
}
