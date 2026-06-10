'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvCommonViolationsSectionProps = {
  embedded?: boolean
}

export default function MvCommonViolationsSection({
  embedded = false,
}: MvCommonViolationsSectionProps) {
  const t = useLandingStrings()

  const content = (
    <>
      <p className="mv-hc-prose">{t.commonViolations.description}</p>

      <ul className="mv-hc-consequences-grid" role="list">
        {t.commonViolations.items.map((item) => (
          <li key={item.title} className="mv-hc-consequence-card">
            <h3 className="mv-hc-consequence-title">{item.title}</h3>
            <p className="mv-hc-consequence-desc">{item.description}</p>
          </li>
        ))}
      </ul>
    </>
  )

  if (embedded) {
    return (
      <section className="mv-hc-section" aria-labelledby="mv-violations-title">
        <hr className="mv-hc-divider" aria-hidden="true" />
        <h2 id="mv-violations-title" className="mv-hc-section-title">
          {t.commonViolations.title}
        </h2>
        {content}
      </section>
    )
  }

  return (
    <section className="mv-article-section" aria-labelledby="mv-violations-title">
      <div className="mv-section-container">
        <article className="mv-article">
          <h2 id="mv-violations-title" className="mv-article-heading">
            {t.commonViolations.title}
          </h2>
          {content}
        </article>
      </div>
    </section>
  )
}
