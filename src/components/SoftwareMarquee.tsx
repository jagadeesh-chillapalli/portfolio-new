import React from 'react';

export interface SoftwareItem {
  id: string;
  name: string;
  iconPath?: string;
  category?: string;
  iconSvg?: React.ReactNode;
  glowColor: string;
}

const SOFTWARE_LIST: SoftwareItem[] = [
  {
    id: 'premiere',
    name: 'Adobe Premiere Pro',
    iconPath: '/assets/icons/premiere.svg',
    category: 'Cinematic NLE & Video Editing',
    glowColor: 'rgba(153, 153, 255, 0.45)',
  },
  {
    id: 'davinci',
    name: 'DaVinci Resolve',
    iconPath: '/assets/icons/davinci.svg',
    category: 'Color Grading, DI & Post-Production',
    glowColor: 'rgba(255, 75, 75, 0.45)',
  },
  {
    id: 'aftereffects',
    name: 'Adobe After Effects',
    iconPath: '/assets/icons/aftereffects.svg',
    category: 'Motion Graphics, Titles & VFX',
    glowColor: 'rgba(210, 145, 255, 0.45)',
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    iconPath: '/assets/icons/photoshop.svg',
    category: 'Color Stills & Thumbnail Design',
    glowColor: 'rgba(49, 168, 255, 0.45)',
  },
  {
    id: 'canva',
    name: 'Canva',
    iconPath: '/assets/icons/canva.svg',
    category: 'Social Graphics & Quick Pitch Decks',
    glowColor: 'rgba(0, 196, 204, 0.45)',
  },
];

// Duplicate items 4 times to ensure seamless infinite looping across all viewports
const REPEATED_ITEMS = [...SOFTWARE_LIST, ...SOFTWARE_LIST, ...SOFTWARE_LIST, ...SOFTWARE_LIST];

export const SoftwareMarquee: React.FC<{
  title?: string;
  subtitle?: string;
  tagline?: string;
  className?: string;
}> = ({
  title = 'Software & Tools',
  subtitle = 'Industry-standard non-linear editing, color grading & visual effects suites',
  tagline = 'Post-Production Arsenal',
  className = '',
}) => {
  return (
    <section className={`software-marquee-section ${className}`}>
      <style>{`
        .software-marquee-section {
          position: relative;
          padding: 42px 0 0px;
          padding-bottom: 0px;
          margin-top: 48px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          overflow: hidden;
        }

        .sm-header {
          text-align: center;
          margin-bottom: 28px;
          padding: 0 16px;
        }

        .sm-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #ffaaaa;
          margin-bottom: 8px;
          opacity: 0.9;
        }

        .sm-title {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.5px;
          margin: 0 0 6px;
          color: #e6eef8;
        }

        .sm-subtitle {
          font-size: 13.5px;
          color: #9aa4b2;
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .sm-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 10px 0;
          mask-image: linear-gradient(90deg, transparent 0%, black 14%, black 86%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 14%, black 86%, transparent 100%);
        }

        .sm-row {
          display: flex;
          align-items: center;
          overflow: hidden;
          user-select: none;
          box-sizing: border-box;
        }

        .sm-row-top {
          padding: 22px 0;
        }

        .sm-row-bottom {
          padding: 14px 0;
          display: flex;
          align-items: center;
          box-sizing: border-box;
        }

        .sm-divider {
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.08) 25%, rgba(255, 255, 255, 0.08) 75%, transparent 100%);
          margin: 2px 0;
        }

        .sm-track {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          gap: 52px;
          will-change: transform;
          height: 100%;
        }

        .sm-track-left {
          animation: smScrollLeft 34s linear infinite;
        }

        .sm-track-right {
          animation: smScrollRight 38s linear infinite;
          margin: 0;
        }

        @keyframes smScrollLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes smScrollRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        .sm-icon-card {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          cursor: pointer;
          flex-shrink: 0;
          border-radius: 16px;
          opacity: 0.88;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.35s ease;
        }

        .sm-icon-card img,
        .sm-icon-card svg {
          width: 68px;
          height: 68px;
          display: block;
          border-radius: 15px;
          filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.5));
          transition: filter 0.35s ease;
          user-select: none;
          -webkit-user-drag: none;
          pointer-events: none;
        }

        .sm-icon-card:hover {
          transform: scale(1.32);
          opacity: 1;
          z-index: 20;
        }

        .sm-name-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          white-space: nowrap;
          font-size: 14px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0.03em;
          color: rgba(230, 238, 248, 0.65);
          padding: 8px 16px;
          box-sizing: border-box;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.02);
          cursor: pointer;
          transition: color 0.3s ease, border-color 0.3s ease, background 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease;
        }

        .sm-name-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          flex-shrink: 0;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .sm-name-item:hover {
          color: #ffffff;
          border-color: rgba(255, 170, 170, 0.35);
          background: rgba(255, 170, 170, 0.08);
          text-shadow: 0 0 16px rgba(255, 170, 170, 0.4);
          transform: translateY(-1px);
        }

        .sm-name-item:hover .sm-name-dot {
          background: #ffaaaa;
          box-shadow: 0 0 8px #ffaaaa;
        }

        @media (max-width: 768px) {
          .sm-track {
            gap: 34px;
          }
          .sm-icon-card {
            width: 58px;
            height: 58px;
          }
          .sm-icon-card img,
          .sm-icon-card svg {
            width: 54px;
            height: 54px;
          }
          .sm-icon-card:hover {
            transform: scale(1.22);
          }
          .sm-name-item {
            font-size: 13px;
            padding: 5px 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sm-track-left,
          .sm-track-right {
            animation: none !important;
            transform: none !important;
          }
          .sm-container {
            overflow-x: auto;
          }
        }
      `}</style>

      {/* Header */}
      <div className="sm-header">
        {tagline && <span className="sm-tag">{tagline}</span>}
        <h3 className="sm-title">{title}</h3>
        {subtitle && <p className="sm-subtitle">{subtitle}</p>}
      </div>

      <div className="sm-container" role="region" aria-label="Software marquee">
        {/* TOP ROW: Icons moving right -> left */}
        <div className="sm-row sm-row-top">
          <div className="sm-track sm-track-left">
            {REPEATED_ITEMS.map((item, index) => (
              <div
                key={`top-${item.id}-${index}`}
                className="sm-icon-card"
                data-tool={item.id}
                title={item.name}
                aria-label={item.name}
              >
                {item.iconPath ? (
                  <img src={item.iconPath} alt={item.name} draggable={false} />
                ) : (
                  item.iconSvg
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Subtle dividing line */}
        <div className="sm-divider" aria-hidden="true" />

        {/* BOTTOM ROW: Names moving left -> right */}
        <div className="sm-row sm-row-bottom">
          <div className="sm-track sm-track-right">
            {REPEATED_ITEMS.map((item, index) => (
              <div
                key={`bottom-${item.id}-${index}`}
                className="sm-name-item"
                data-tool={item.id}
              >
                <span className="sm-name-dot" aria-hidden="true" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareMarquee;
