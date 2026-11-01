import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const palette = {
  background: '#F5FBF7',
  surface: '#F5FBF7',
  surfaceLow: '#EFF5F1',
  surfaceContainer: '#E9EFEC',
  surfaceCard: '#FFFFFF',
  primary: '#00251D',
  primaryContainer: '#123B32',
  secondary: '#755A26',
  secondaryContainer: '#FDD898',
  accent: '#C3A267',
  muted: '#414846',
  mutedText: '#67716C',
  line: '#D9E0DA',
  white: '#FFFFFF',
  goldSoft: '#F5E7C8',
};

const logoUrl =
  'https://lh3.googleusercontent.com/aida/AEtjO1Vo0qxoDtgBYNE-a2SvltLuwRvQiL1D76n2aV7nGISHB0qQyKsa8hmYC3vq57Bszosjf9K92rCVLeRa5X1LaFsUuX_fuV68ujsC-wUgM1_r9-XaRFBO8MSvoL5uD2oERSoydxJ-1m1WH3mI5ZJq3FQdN0I2dpyKgGh02VSFNuU-kXT7_62jZd97fQJk7Z55plrebifcoORXZaboIU79mKuBcuVEhRkMTm2L9tme2A';

const avatarUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBFd3zrGrw6c5ucEC5ikow';

const heroImageUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCCJN2GI_22E4tNmCuUid9XH72Ke6vTA77NCdJ3Ma7Nckj_dDZ1mCQPSuwqOeg2wKVY8N27ID7IKw56AWOp9eS2pMBoNv57u0lem8vGTboMuyZuE_FYrgBMbBa2-A2HmepKZYbjP82XroUwPqRtnu-oI9eI1dq4E2YTLgrnl5gBz7alud06rEHiO6nARd6TG7zRDzpbHuMC2g369PpoW1naqndtLiwylVR_3J4ctw';

const cardImage1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCgMDfxTVQ29cgTfGD67FMov1cNz0zAtfQcre-1Sv-xzbNx1KxryjmQShoiLTQ1EKGsgdrc4i1EnFTBm3FCE0qODBYmRNk35EUTDCsnbObmJ8i2CNU9ecsuWSkKUS_XaSQxUVeaCB55uJye1yaS3SbW59Rxvd4gsCOb7UxjD6AXYNetNEn9DQQPMMnOzsrvZd96G_1M1qmmGNetquCrEp7R3ejcEjwrfN2UazTNUQ';

const cardImage2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCC-83xGOGOUKmEgjg7tBqN0cJZz38zZ23T_KWpz5O-0YxMm-LA3xjHxiRV80wS4oH0rEadQTUW0-zgRSiJx2THolGFCIdJReSNmDexuwXw0870A9h2oGJgQdCPjE2cCUP9T5VT5YpwbBj8O-cmQrARM0tfaPwWak9P196PFdGSqnq-XcoE44MPH38UQNvJSOFD5i8S51JnEn7jbHpl6SBKg49MJZ_InXc4z2hdig';

const artisanOne =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBBf8WUXPeMDdPHSMSZxjzbLlMbihtaoumjUxdSo6jFGFbnQxCfwvk41wje6GUG78CWLdbwTXf89TuvU1ZEVGwZJE8J6L677eBXsNy7MRL4PjfqRJHk2LX6UAdvTi2v7_hA1QONp_MhvIiTZnj7yDNG5UAt59Cfc2kgkpq_bOBIvGHpnuTCHQ9MqyHB0XLSB9svTjrb5P_pU2mTgkdBZcUWKohkTRwfTHLaWDtnXw';

const artisanTwo =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBy61dnF3e1ygcGztdFI2a70ISt9Sdb2AHE_pAJ-o2gnHjjuFddSyafDn21P8DpVm2qQZnzO-lBsdhOxO9M3xnLRnMu9vE2bxxDBeMlhAoqege1C1wkFrpZaQDd3-y8n91ggHOW8JVLKfh4yhLYTpuuzNm6mj_972JxORiQuyktDldWS-tpQXaUaNHh5iilsw4zSCS6oplA9UQJ69nDNFtIWnuPFZUjhVJOl9qy4A';

const serviceIcon = (name: string) => {
  const icons: Record<string, string> = {
    home: '⌂',
    explore: '◌',
    add: '+',
    bag: '◫',
    person: '◉',
    bell: '🔔',
    notifications: '🔔',
    magic: '✦',
    arrow: '→',
    check: '✓',
    star: '★',
  };
  return icons[name] ?? '•';
};

function SectionTitle({ title, subtitle, action }: { title: string; subtitle?: string; action?: string }) {
  return (
    <View style={styles.sectionHeader}>
      <View>
        <Text style={styles.sectionTitle}>{title}</Text>
        {subtitle ? <Text style={styles.sectionSubtitle}>{subtitle}</Text> : null}
      </View>
      {action ? <Text style={styles.sectionAction}>{action}</Text> : null}
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor={palette.background} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.header}>
          <View style={styles.logoWrap}>
            <Image source={{ uri: logoUrl }} style={styles.logoImage} resizeMode="contain" />
            <View style={styles.brandTextWrap}>
              <View style={styles.brandRow}>
                <Text style={styles.brand}>APEX LOOM</Text>
                <View style={styles.brandDot} />
                <Text style={styles.brandTag}>Home</Text>
              </View>
              <Text style={styles.tagline}>First Measure to Finished Wear</Text>
            </View>
          </View>

          <View style={styles.headerActions}>
            <Pressable style={styles.iconButton}>
              <Text style={styles.iconText}>{serviceIcon('notifications')}</Text>
              <View style={styles.notificationDot} />
            </Pressable>
            <Pressable style={styles.avatarButton}>
              <Image source={{ uri: avatarUrl }} style={styles.avatarImage} resizeMode="cover" />
            </Pressable>
          </View>
        </View>

        <View style={styles.greetingRow}>
          <View>
            <Text style={styles.kicker}>Lagos Atelier Network</Text>
            <Text style={styles.greeting}>Good morning, Tariq</Text>
          </View>
          <View style={styles.pillBadge}>
            <View style={styles.pillDot} />
            <Text style={styles.pillText}>2 Active Fittings</Text>
          </View>
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroContent}>
            <View style={styles.heroEyebrowRow}>
              <Text style={styles.eyebrow}>Haute Bespoke</Text>
              <View style={styles.miniDot} />
              <Text style={styles.metaText}>SS25 Collection</Text>
            </View>
            <Text style={styles.heroTitle}>Your Next Outfit Starts Here.</Text>
            <Text style={styles.heroText}>
              Discover handcrafted styles, sculpt your vision with AI, and commission verified West African master tailors.
            </Text>
          </View>

          <View style={styles.heroImageWrap}>
            <Image source={{ uri: heroImageUrl }} style={styles.heroImage} resizeMode="cover" />
            <View style={styles.heroOverlay} />
            <View style={styles.heroBottomBar}>
              <View>
                <Text style={styles.heroLabel}>Bespoke Agbada Masterpiece</Text>
                <Text style={styles.heroSubLabel}>Emerald Silk Brocade</Text>
              </View>
              <View style={styles.heroBadge}>
                <Text style={styles.heroBadgeText}>Hand-Stitched</Text>
              </View>
            </View>
          </View>

          <View style={styles.heroActions}>
            <Pressable style={[styles.primaryButton, styles.primaryButtonTall]}>
              <Text style={styles.primaryButtonIcon}>{serviceIcon('magic')}</Text>
              <Text style={styles.primaryButtonText}>Create New Outfit</Text>
            </Pressable>
            <Pressable style={[styles.secondaryButton, styles.secondaryButtonTall]}>
              <Text style={styles.secondaryButtonIcon}>{serviceIcon('explore')}</Text>
              <Text style={styles.secondaryButtonText}>Explore Styles</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionTopRow}>
            <View style={styles.sectionIconWrap}>
              <Text style={styles.sectionIcon}>{serviceIcon('magic')}</Text>
            </View>
            <View style={styles.sectionTitleWrap}>
              <Text style={styles.cardTitle}>Imagine It. Design It.</Text>
              <Text style={styles.cardSubtitle}>Apex Loom Generative Atelier Engine</Text>
            </View>
            <View style={styles.betaBadge}>
              <Text style={styles.betaText}>AI BETA</Text>
            </View>
          </View>

          <View style={styles.promptList}>
            <Pressable style={styles.promptRow}>
              <View style={styles.promptIconWrapPrimary}>
                <Text style={styles.promptIcon}>{serviceIcon('magic')}</Text>
              </View>
              <View style={styles.promptTextWrap}>
                <Text style={styles.promptTitle}>Describe a Style</Text>
                <Text style={styles.promptMeta}>"Deep indigo Senator with geometric gold chest embroidery"</Text>
              </View>
              <Text style={styles.promptArrow}>{serviceIcon('arrow')}</Text>
            </Pressable>

            <Pressable style={styles.promptRow}>
              <View style={styles.promptIconWrapGold}>
                <Text style={styles.promptIcon}>{serviceIcon('explore')}</Text>
              </View>
              <View style={styles.promptTextWrap}>
                <Text style={styles.promptTitle}>Upload a Reference</Text>
                <Text style={styles.promptMeta}>Moodboards, Pinterest clips, swatch photos, or pencil sketches</Text>
              </View>
              <Text style={styles.promptArrow}>{serviceIcon('arrow')}</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.virtualHeader}>
            <View style={styles.virtualTextWrap}>
              <Text style={styles.virtualEyebrow}>Apex Loom Mirror</Text>
              <Text style={styles.virtualTitle}>See Your Style Before You Sew</Text>
              <Text style={styles.virtualSubtitle}>Preview draped drape simulation on your 3D digital twin.</Text>
            </View>
            <View style={styles.virtualCube}>
              <Text style={styles.virtualCubeText}>◌</Text>
            </View>
          </View>

          <View style={styles.avatarCanvas}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjQLVQeljN9OUdbCeXe_AJFd5N1NqlCXjp8PjuLk1ixvKMf0iO3rjH0SUDQO35ig5MSy-qeUfzcdTXswCo4DXEL5LX0-1S-XU2MfXR8lYwxaM4iQY08xBm2f_gdT_WGetjGJZF033JPjX-o_HwIfof2UMSUtjDbum5_VB7IsI_W56ls6vtFn9d8_3ajFYbyvcAwwzgmY-aZtsXZkWaMbVPJ9P4S3WdDDtyKiLRZQ',
              }}
              style={styles.avatarPhoto}
              resizeMode="cover"
            />
            <View style={styles.avatarTint} />
            <View style={styles.avatarBadge}>
              <Text style={styles.avatarBadgeText}>Avatar: Tariq #01 (184cm · Slim)</Text>
            </View>
            <View style={styles.avatarNote}>
              <Text style={styles.avatarNoteText}>Visual preview · Not physical fit guarantee</Text>
            </View>
          </View>

          <Pressable style={[styles.primaryButton, styles.primaryButtonTall]}>
            <Text style={styles.primaryButtonIcon}>{serviceIcon('check')}</Text>
            <Text style={styles.primaryButtonText}>Open Virtual Fitting Room</Text>
          </Pressable>
        </View>

        <View style={styles.categorySection}>
          <SectionTitle title="Couture Categories" subtitle="Curated traditional & modern cuts" action="View All" />
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScroll}>
            {[
              { label: 'Agbada', icon: 'styler', active: true },
              { label: 'Kaftan', icon: 'dry_cleaning' },
              { label: 'Senator', icon: 'apparel' },
              { label: 'Suits', icon: 'iron' },
              { label: 'Gowns', icon: 'woman' },
              { label: 'Uniforms', icon: 'badge' },
              { label: 'Ready-to-Wear', icon: 'shopping_basket' },
            ].map((item, index) => (
              <Pressable key={`${item.label}-${index}`} style={[styles.categoryButton, item.active && styles.categoryButtonActive]}>
                <View style={[styles.categoryIconWrap, item.active && styles.categoryIconWrapActive]}>
                  <Text style={[styles.categoryIcon, item.active && styles.categoryIconActive]}>{serviceIcon(item.icon)}</Text>
                </View>
                <Text style={[styles.categoryLabel, item.active && styles.categoryLabelActive]}>{item.label}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        <View style={styles.recommendedSection}>
          <SectionTitle title="Recommended Silhouettes" subtitle="Trained on your body metrics and Lagos occasions" action="Explore More" />
          <View style={styles.cardGrid}>
            <View style={styles.styleCard}>
              <View style={styles.styleImageWrap}>
                <Image source={{ uri: cardImage1 }} style={styles.styleImage} resizeMode="cover" />
                <Pressable style={styles.bookmarkButton}>
                  <Text style={styles.bookmarkIcon}>⌂</Text>
                </Pressable>
                <View style={styles.styleTagRow}>
                  <View style={styles.styleTagDark}><Text style={styles.styleTagText}>Ceremonial</Text></View>
                  <View style={styles.styleTagGold}><Text style={styles.styleTagText}>Getzner Cotton</Text></View>
                </View>
              </View>
              <View style={styles.styleCardContent}>
                <View style={styles.styleNameRow}>
                  <Text style={styles.styleName}>Royal Emerald Agbada</Text>
                  <Text style={styles.stylePrice}>₦145,000</Text>
                </View>
                <Text style={styles.styleDescription}>Three-piece masterpiece featuring architectural shoulder volume, tonal threadwork, and bespoke Fila.</Text>
                <Pressable style={styles.linkButton}>
                  <Text style={styles.linkText}>View Style Dossier</Text>
                  <Text style={styles.linkChevron}>›</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.styleCard}>
              <View style={styles.styleImageWrap}>
                <Image source={{ uri: cardImage2 }} style={styles.styleImage} resizeMode="cover" />
                <Pressable style={styles.bookmarkButton}>
                  <Text style={styles.bookmarkIcon}>◌</Text>
                </Pressable>
                <View style={styles.styleTagRow}>
                  <View style={styles.styleTagDark}><Text style={styles.styleTagText}>Executive</Text></View>
                  <View style={styles.styleTagGold}><Text style={styles.styleTagText}>Italian Cashmere-Wool</Text></View>
                </View>
              </View>
              <View style={styles.styleCardContent}>
                <View style={styles.styleNameRow}>
                  <Text style={styles.styleName}>Minimalist Charcoal Senator</Text>
                  <Text style={styles.stylePrice}>₦85,000</Text>
                </View>
                <Text style={styles.styleDescription}>Streamlined two-piece tunic crafted with weighted Italian wool, concealed button placket, and crisp taper.</Text>
                <Pressable style={styles.linkButton}>
                  <Text style={styles.linkText}>View Style Dossier</Text>
                  <Text style={styles.linkChevron}>›</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.artisanSection}>
          <SectionTitle title="Master Tailors Near You" subtitle="Verified by Apex Loom Quality Guild" action="Guild Directory" />
          <View style={styles.artisanList}>
            <View style={styles.artisanCard}>
              <View style={styles.artisanHeader}>
                <View style={styles.artisanProfile}>
                  <Image source={{ uri: artisanOne }} style={styles.artisanImage} resizeMode="cover" />
                  <View style={styles.artisanInfo}>
                    <View style={styles.artisanNameRow}>
                      <Text style={styles.artisanName}>Gidan Dinki Atelier</Text>
                      <Text style={styles.verifiedBadge}>✓</Text>
                    </View>
                    <Text style={styles.artisanMeta}>Maitama, Abuja · Verified Bespoke</Text>
                  </View>
                </View>
                <View style={styles.ratingBadge}>
                  <Text style={styles.starText}>★</Text>
                  <Text style={styles.ratingText}>4.9</Text>
                  <Text style={styles.ratingMeta}>(128)</Text>
                </View>
              </View>
              <View style={styles.tagRow}>
                <View style={styles.tag}><Text style={styles.tagText}>Speciality: Royal Agbada</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>Turnaround: 7-10 Days</Text></View>
              </View>
              <View style={styles.artisanFooter}>
                <Text style={styles.slotText}>Next fitting slot: <Text style={styles.slotStrong}>Tomorrow, 2:00 PM</Text></Text>
                <Pressable style={styles.smallGhostButton}>
                  <Text style={styles.smallGhostText}>View Profile</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.artisanCard}>
              <View style={styles.artisanHeader}>
                <View style={styles.artisanProfile}>
                  <Image source={{ uri: artisanTwo }} style={styles.artisanImage} resizeMode="cover" />
                  <View style={styles.artisanInfo}>
                    <View style={styles.artisanNameRow}>
                      <Text style={styles.artisanName}>Savile & Niger Craft</Text>
                      <Text style={styles.verifiedBadge}>✓</Text>
                    </View>
                    <Text style={styles.artisanMeta}>Lekki Phase 1, Lagos · Master Tailor 15 yrs</Text>
                  </View>
                </View>
                <View style={styles.ratingBadge}>
                  <Text style={styles.starText}>★</Text>
                  <Text style={styles.ratingText}>5.0</Text>
                  <Text style={styles.ratingMeta}>(94)</Text>
                </View>
              </View>
              <View style={styles.tagRow}>
                <View style={styles.tag}><Text style={styles.tagText}>Speciality: Modern Senator & Tuxedos</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>Hand Canvas Stitching</Text></View>
              </View>
              <View style={styles.artisanFooter}>
                <Text style={styles.slotText}>Next fitting slot: <Text style={styles.slotStrong}>Thu, 11:30 AM</Text></Text>
                <Pressable style={styles.smallGhostButton}>
                  <Text style={styles.smallGhostText}>View Profile</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.orderSection}>
          <View style={styles.sectionHeaderCompact}>
            <View>
              <Text style={styles.sectionTitle}>Active Atelier Commission</Text>
              <Text style={styles.sectionSubtitle}>Track your bespoke garment milestone</Text>
            </View>
            <View style={styles.stageBadge}><Text style={styles.stageBadgeText}>Stage 3 of 5</Text></View>
          </View>

          <View style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <Image
                source={{
                  uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqCUnxokpf35TJLbkYRzSPtjncfewP4BCLriE89IvnAqejoohbPkceV4SBk_6Hh_rnB2OMUlB_s40r4yu__eFM4ymXJZyxDdaUHZsu4TXs7mZQm1DRCyGSoLakT4aVgKZMH1qrcOuc8OpCdtEDFewOo1lLIF8tI6eEGGsbPNyvrIJMvWZRwqFtpioouP_MDrhI850UgmNuinxYJxgOabKPM0trWfX3ZM3iUWKsGQ',
                }}
                style={styles.orderImage}
                resizeMode="cover"
              />
              <View style={styles.orderMetaWrap}>
                <Text style={styles.orderCode}>Order #AL-2094</Text>
                <Text style={styles.orderName}>Midnight Velvet Senator Tunic</Text>
                <Text style={styles.orderArtist}>Tailor: Master Haruna · Victoria Island Workshop</Text>
              </View>
            </View>

            <View style={styles.progressBox}>
              <View style={styles.progressHead}>
                <View style={styles.progressLabelWrap}>
                  <View style={styles.progressDot} />
                  <Text style={styles.progressLabel}>Current: Pattern & Cutting (Yanka Kaya)</Text>
                </View>
                <Text style={styles.progressPercent}>60% complete</Text>
              </View>
              <View style={styles.progressBar}>
                <View style={styles.progressFill} />
              </View>
              <View style={styles.progressNotes}>
                <Text style={styles.progressNote}>First Fitting: Passed</Text>
                <Text style={styles.progressDate}>Delivery: <Text style={styles.progressDateStrong}>Friday, 18 Oct</Text></Text>
              </View>
            </View>

            <View style={styles.orderFooterButtons}>
              <Pressable style={[styles.primaryButton, styles.primaryButtonMedium]}>
                <Text style={styles.primaryButtonIcon}>{serviceIcon('home')}</Text>
                <Text style={styles.primaryButtonText}>View Live Milestone Timeline</Text>
              </Pressable>
              <Pressable style={styles.chatButton}>
                <Text style={styles.chatButtonText}>{serviceIcon('person')}</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.serviceSection}>
          <SectionTitle title="Fabrics & Specialized Craft" subtitle="Source premium textiles & artisanal embellishments" action="All Services" />
          <View style={styles.serviceGrid}>
            <Pressable style={styles.serviceCard}>
              <View style={styles.serviceBadgeGold}><Text style={styles.serviceBadgeText}>{serviceIcon('explore')}</Text></View>
              <View style={styles.serviceText}>
                <Text style={styles.serviceTitle}>Authentic Fabric Houses</Text>
                <Text style={styles.serviceSubtitle}>Super Getzner, Italian Wool, Aso Oke</Text>
              </View>
            </Pressable>

            <Pressable style={styles.serviceCard}>
              <View style={styles.serviceBadgeDark}><Text style={styles.serviceBadgeText}>{serviceIcon('magic')}</Text></View>
              <View style={styles.serviceText}>
                <Text style={styles.serviceTitle}>Embroidery Masters</Text>
                <Text style={styles.serviceSubtitle}>Zari thread, monogram, chain stitch</Text>
              </View>
            </Pressable>

            <Pressable style={styles.serviceCard}>
              <View style={styles.serviceBadgeSoft}><Text style={styles.serviceBadgeText}>{serviceIcon('home')}</Text></View>
              <View style={styles.serviceText}>
                <Text style={styles.serviceTitle}>Pattern Drafters</Text>
                <Text style={styles.serviceSubtitle}>Architectural grading & bespoke slopers</Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={styles.helpSection}>
          <View style={styles.helpTopRow}>
            <View style={styles.helpTitleWrap}>
              <Text style={styles.helpIcon}>{serviceIcon('check')}</Text>
              <Text style={styles.helpTitle}>Atelier Knowledge & Help</Text>
            </View>
            <Text style={styles.helpMeta}>24/7 Concierge</Text>
          </View>

          <Pressable style={styles.helpLinkCard}>
            <View style={styles.helpLinkInner}>
              <View style={styles.helpLinkIcon}><Text style={styles.helpLinkIconText}>{serviceIcon('check')}</Text></View>
              <View style={styles.helpLinkTextWrap}>
                <Text style={styles.helpLinkTitle}>Guided Tape Measurement Tutorial</Text>
                <Text style={styles.helpLinkSubtitle}>Interactive 6-step self-measurement guide with AR assist</Text>
              </View>
            </View>
            <Text style={styles.helpPlay}>{serviceIcon('check')}</Text>
          </Pressable>

          <View style={styles.chatBanner}>
            <View style={styles.chatBannerLeft}>
              <View style={styles.chatBadge}><Text style={styles.chatBadgeText}>{serviceIcon('magic')}</Text></View>
              <View style={styles.chatTextWrap}>
                <Text style={styles.chatTitle}>Ask Apex Loom Assistant</Text>
                <Text style={styles.chatSubtitle}>Ask about fabrics, styling etiquette, or order milestones</Text>
              </View>
            </View>
            <Pressable style={styles.chatAction}>
              <Text style={styles.chatActionText}>Chat Now</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <Pressable style={styles.navItemActive}>
          <Text style={styles.navIconActive}>{serviceIcon('home')}</Text>
          <Text style={styles.navLabelActive}>Home</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}>{serviceIcon('explore')}</Text>
          <Text style={styles.navLabel}>Explore</Text>
        </Pressable>
        <Pressable style={styles.centerAddButton}>
          <Text style={styles.centerAddText}>+</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}>{serviceIcon('bag')}</Text>
          <Text style={styles.navLabel}>Orders</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}>{serviceIcon('person')}</Text>
          <Text style={styles.navLabel}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  scrollContent: {
    paddingBottom: 120,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 18,
    paddingBottom: 12,
    backgroundColor: 'rgba(245, 251, 247, 0.92)',
  },
  logoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    minWidth: 0,
  },
  logoImage: {
    width: 34,
    height: 34,
    marginRight: 10,
  },
  brandTextWrap: {
    flexShrink: 1,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brand: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: -0.5,
    color: palette.primary,
  },
  brandDot: {
    width: 5,
    height: 5,
    borderRadius: 999,
    backgroundColor: palette.secondary,
    marginHorizontal: 8,
  },
  brandTag: {
    fontSize: 11,
    lineHeight: 14,
    color: palette.mutedText,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  tagline: {
    fontSize: 10,
    lineHeight: 14,
    color: '#6F7A74',
    marginTop: 2,
    letterSpacing: 0.3,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
  },
  iconText: {
    fontSize: 20,
    color: palette.primary,
  },
  notificationDot: {
    position: 'absolute',
    right: 10,
    top: 9,
    width: 7,
    height: 7,
    backgroundColor: palette.secondary,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: palette.background,
  },
  avatarButton: {
    width: 36,
    height: 36,
    borderRadius: 999,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: palette.line,
  },
  avatarImage: {
    width: 36,
    height: 36,
  },
  greetingRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 14,
  },
  kicker: {
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 1.3,
    textTransform: 'uppercase',
    color: palette.mutedText,
  },
  greeting: {
    marginTop: 3,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    letterSpacing: -0.7,
    color: palette.primary,
  },
  pillBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDE6B8',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  pillDot: {
    width: 7,
    height: 7,
    backgroundColor: palette.secondary,
    borderRadius: 999,
    marginRight: 7,
  },
  pillText: {
    fontSize: 11,
    lineHeight: 14,
    color: '#5B4311',
    fontWeight: '700',
  },
  heroCard: {
    backgroundColor: palette.surfaceLow,
    borderRadius: 18,
    padding: 16,
    gap: 16,
    borderWidth: 1,
    borderColor: palette.line,
  },
  heroContent: {
    gap: 8,
  },
  heroEyebrowRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  eyebrow: {
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: palette.secondary,
    fontWeight: '700',
  },
  miniDot: {
    width: 5,
    height: 5,
    borderRadius: 999,
    backgroundColor: palette.secondary,
  },
  metaText: {
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0.6,
    color: '#5A615D',
  },
  heroTitle: {
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: -0.8,
    fontWeight: '700',
    color: palette.primary,
    width: '90%',
  },
  heroText: {
    fontSize: 13,
    lineHeight: 20,
    color: palette.muted,
  },
  heroImageWrap: {
    position: 'relative',
    height: 220,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#dfe8e2',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'rgba(0, 37, 29, 0.18)',
  },
  heroBottomBar: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  heroLabel: {
    fontSize: 11,
    lineHeight: 14,
    color: '#F5E7C8',
    fontWeight: '700',
  },
  heroSubLabel: {
    fontSize: 22,
    lineHeight: 26,
    color: palette.white,
    fontWeight: '700',
  },
  heroBadge: {
    backgroundColor: 'rgba(18, 59, 50, 0.72)',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  heroBadgeText: {
    fontSize: 10,
    lineHeight: 14,
    color: '#F7F3EA',
    fontWeight: '700',
  },
  heroActions: {
    flexDirection: 'row',
    gap: 10,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.primaryContainer,
    borderRadius: 12,
    paddingHorizontal: 16,
    gap: 8,
  },
  primaryButtonTall: {
    flex: 1,
    height: 44,
  },
  primaryButtonMedium: {
    flex: 1,
    height: 42,
  },
  primaryButtonIcon: {
    fontSize: 16,
    color: '#FDD898',
    fontWeight: '700',
  },
  primaryButtonText: {
    fontSize: 13,
    lineHeight: 18,
    color: palette.white,
    fontWeight: '700',
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8EDEB',
    borderRadius: 12,
    paddingHorizontal: 15,
    gap: 8,
  },
  secondaryButtonTall: {
    flex: 1,
    height: 44,
  },
  secondaryButtonIcon: {
    fontSize: 16,
    color: '#2E3836',
  },
  secondaryButtonText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#1A201E',
    fontWeight: '700',
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: palette.line,
    padding: 16,
    marginTop: 18,
  },
  sectionTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#FDE6B8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionIcon: {
    fontSize: 18,
    color: '#5B4311',
  },
  sectionTitleWrap: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.5,
    color: palette.primary,
    fontWeight: '700',
  },
  cardSubtitle: {
    fontSize: 11,
    lineHeight: 14,
    color: palette.mutedText,
    marginTop: 2,
  },
  betaBadge: {
    backgroundColor: '#FDE6B8',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  betaText: {
    fontSize: 10,
    lineHeight: 12,
    color: '#5B4311',
    fontWeight: '700',
  },
  promptList: {
    gap: 10,
  },
  promptRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F7F5',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E6EAE7',
  },
  promptIconWrapPrimary: {
    width: 36,
    height: 36,
    borderRadius: 999,
    backgroundColor: '#123B32',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  promptIconWrapGold: {
    width: 36,
    height: 36,
    borderRadius: 999,
    backgroundColor: '#FDD898',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  promptIcon: {
    fontSize: 17,
    color: '#F7F3EA',
  },
  promptTextWrap: {
    flex: 1,
  },
  promptTitle: {
    fontSize: 14,
    lineHeight: 18,
    color: palette.primary,
    fontWeight: '700',
  },
  promptMeta: {
    fontSize: 11,
    lineHeight: 15,
    color: palette.mutedText,
    marginTop: 2,
  },
  promptArrow: {
    fontSize: 18,
    color: '#7C8A85',
  },
  virtualHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 12,
  },
  virtualTextWrap: {
    flex: 1,
  },
  virtualEyebrow: {
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: palette.secondary,
    fontWeight: '700',
  },
  virtualTitle: {
    marginTop: 4,
    fontSize: 20,
    lineHeight: 26,
    color: palette.primary,
    letterSpacing: -0.5,
    fontWeight: '700',
  },
  virtualSubtitle: {
    marginTop: 4,
    fontSize: 11,
    lineHeight: 16,
    color: palette.mutedText,
  },
  virtualCube: {
    width: 36,
    height: 36,
    borderRadius: 999,
    backgroundColor: '#EAF0ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  virtualCubeText: {
    fontSize: 20,
    color: '#1B2D2D',
  },
  avatarCanvas: {
    position: 'relative',
    height: 230,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#DFE7E3',
    marginBottom: 12,
  },
  avatarPhoto: {
    width: '100%',
    height: '100%',
  },
  avatarTint: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 37, 29, 0.22)',
  },
  avatarBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  avatarBadgeText: {
    fontSize: 10,
    lineHeight: 14,
    color: '#1B1F1D',
    fontWeight: '700',
  },
  avatarNote: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 12,
    backgroundColor: 'rgba(28,34,32,0.72)',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  avatarNoteText: {
    fontSize: 10,
    lineHeight: 14,
    color: '#DCEAE3',
    textAlign: 'center',
  },
  categorySection: {
    marginTop: 18,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionHeaderCompact: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    lineHeight: 26,
    color: palette.primary,
    letterSpacing: -0.5,
    fontWeight: '700',
  },
  sectionSubtitle: {
    fontSize: 11,
    lineHeight: 16,
    color: palette.mutedText,
    marginTop: 2,
  },
  sectionAction: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '700',
    color: palette.secondary,
  },
  categoryScroll: {
    paddingHorizontal: 2,
    paddingVertical: 4,
    gap: 10,
  },
  categoryButton: {
    width: 82,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: palette.line,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    gap: 10,
  },
  categoryButtonActive: {
    borderColor: '#D9E0DA',
    backgroundColor: '#F7F8F7',
  },
  categoryIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 999,
    backgroundColor: '#E5EAE8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryIconWrapActive: {
    backgroundColor: palette.primaryContainer,
  },
  categoryIcon: {
    fontSize: 18,
    color: '#1D201F',
  },
  categoryIconActive: {
    color: '#FDD898',
  },
  categoryLabel: {
    fontSize: 11,
    lineHeight: 14,
    textAlign: 'center',
    color: '#1E2624',
    fontWeight: '700',
  },
  categoryLabelActive: {
    color: palette.primary,
  },
  recommendedSection: {
    marginTop: 20,
  },
  cardGrid: {
    gap: 16,
  },
  styleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: palette.line,
  },
  styleImageWrap: {
    position: 'relative',
    height: 190,
  },
  styleImage: {
    width: '100%',
    height: '100%',
  },
  bookmarkButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 34,
    height: 34,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.82)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookmarkIcon: {
    fontSize: 16,
    color: palette.primary,
  },
  styleTagRow: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 12,
    flexDirection: 'row',
    gap: 6,
  },
  styleTagDark: {
    backgroundColor: 'rgba(18,59,50,0.75)',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  styleTagGold: {
    backgroundColor: '#FDE6B8',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  styleTagText: {
    fontSize: 9,
    lineHeight: 12,
    color: '#F5F8F7',
    fontWeight: '700',
  },
  styleCardContent: {
    padding: 14,
    gap: 10,
  },
  styleNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: 8,
  },
  styleName: {
    fontSize: 17,
    lineHeight: 22,
    flex: 1,
    color: palette.primary,
    fontWeight: '700',
  },
  stylePrice: {
    fontSize: 12,
    lineHeight: 16,
    color: palette.secondary,
    fontWeight: '700',
  },
  styleDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: palette.mutedText,
  },
  linkButton: {
    height: 40,
    backgroundColor: '#EFF5F1',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  linkText: {
    fontSize: 12,
    lineHeight: 16,
    color: palette.primary,
    fontWeight: '700',
  },
  linkChevron: {
    fontSize: 18,
    color: palette.primary,
  },
  artisanSection: {
    marginTop: 20,
  },
  artisanList: {
    gap: 12,
  },
  artisanCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: palette.line,
    padding: 14,
    gap: 12,
  },
  artisanHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  artisanProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  artisanImage: {
    width: 42,
    height: 42,
    borderRadius: 999,
    marginRight: 10,
  },
  artisanInfo: {
    flexShrink: 1,
  },
  artisanNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  artisanName: {
    fontSize: 17,
    lineHeight: 22,
    color: palette.primary,
    fontWeight: '700',
  },
  verifiedBadge: {
    fontSize: 14,
    color: palette.secondary,
    fontWeight: '700',
  },
  artisanMeta: {
    fontSize: 11,
    lineHeight: 16,
    color: palette.mutedText,
    marginTop: 2,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6F6',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  starText: {
    fontSize: 14,
    color: palette.secondary,
    marginRight: 3,
  },
  ratingText: {
    fontSize: 12,
    lineHeight: 16,
    color: '#1B201D',
    fontWeight: '700',
  },
  ratingMeta: {
    fontSize: 10,
    lineHeight: 14,
    color: palette.mutedText,
    marginLeft: 2,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    backgroundColor: '#F4F7F6',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  tagText: {
    fontSize: 10,
    lineHeight: 13,
    color: '#3E4B47',
    fontWeight: '600',
  },
  artisanFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  slotText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 16,
    color: palette.mutedText,
  },
  slotStrong: {
    color: palette.primary,
    fontWeight: '700',
  },
  smallGhostButton: {
    backgroundColor: '#EFF5F1',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  smallGhostText: {
    fontSize: 11,
    lineHeight: 14,
    color: palette.primary,
    fontWeight: '700',
  },
  orderSection: {
    marginTop: 20,
  },
  stageBadge: {
    backgroundColor: '#FDE6B8',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  stageBadgeText: {
    fontSize: 10,
    lineHeight: 12,
    color: '#5B4311',
    fontWeight: '700',
  },
  orderCard: {
    backgroundColor: '#F4F7F5',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: palette.line,
    padding: 14,
    gap: 14,
  },
  orderHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  orderImage: {
    width: 58,
    height: 58,
    borderRadius: 12,
  },
  orderMetaWrap: {
    flex: 1,
  },
  orderCode: {
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0.9,
    textTransform: 'uppercase',
    color: palette.secondary,
    fontWeight: '700',
  },
  orderName: {
    fontSize: 18,
    lineHeight: 22,
    color: palette.primary,
    fontWeight: '700',
    marginTop: 2,
  },
  orderArtist: {
    fontSize: 11,
    lineHeight: 16,
    color: palette.mutedText,
    marginTop: 2,
  },
  progressBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    gap: 10,
  },
  progressHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  progressLabelWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: palette.secondary,
    marginRight: 8,
  },
  progressLabel: {
    fontSize: 12,
    lineHeight: 16,
    color: palette.primary,
    fontWeight: '700',
    flexShrink: 1,
  },
  progressPercent: {
    fontSize: 10,
    lineHeight: 14,
    color: palette.mutedText,
    fontWeight: '700',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#EAF0EE',
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressFill: {
    width: '60%',
    height: '100%',
    backgroundColor: palette.primaryContainer,
    borderRadius: 999,
  },
  progressNotes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  progressNote: {
    fontSize: 11,
    lineHeight: 16,
    color: palette.mutedText,
  },
  progressDate: {
    fontSize: 11,
    lineHeight: 16,
    color: palette.mutedText,
  },
  progressDateStrong: {
    color: palette.primary,
    fontWeight: '700',
  },
  orderFooterButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  chatButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#E8EDEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatButtonText: {
    fontSize: 17,
    color: palette.primary,
  },
  serviceSection: {
    marginTop: 20,
  },
  serviceGrid: {
    gap: 10,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: palette.line,
    borderRadius: 16,
    padding: 12,
  },
  serviceBadgeGold: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FDE6B8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceBadgeDark: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: palette.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceBadgeSoft: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#EAF0ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceBadgeText: {
    fontSize: 19,
    color: '#1B201D',
  },
  serviceText: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 13,
    lineHeight: 18,
    color: palette.primary,
    fontWeight: '700',
  },
  serviceSubtitle: {
    fontSize: 11,
    lineHeight: 16,
    color: palette.mutedText,
    marginTop: 2,
  },
  helpSection: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: palette.line,
    padding: 16,
    gap: 12,
  },
  helpTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  helpTitleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  helpIcon: {
    fontSize: 16,
    color: palette.secondary,
  },
  helpTitle: {
    fontSize: 18,
    lineHeight: 24,
    color: palette.primary,
    fontWeight: '700',
  },
  helpMeta: {
    fontSize: 10,
    lineHeight: 14,
    color: palette.mutedText,
  },
  helpLinkCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F7F6',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  helpLinkInner: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  },
  helpLinkIcon: {
    width: 30,
    height: 30,
    borderRadius: 999,
    backgroundColor: '#FDE6B8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helpLinkIconText: {
    fontSize: 15,
    color: '#5B4311',
  },
  helpLinkTextWrap: {
    flex: 1,
  },
  helpLinkTitle: {
    fontSize: 12,
    lineHeight: 16,
    color: palette.primary,
    fontWeight: '700',
  },
  helpLinkSubtitle: {
    fontSize: 11,
    lineHeight: 16,
    color: palette.mutedText,
    marginTop: 2,
  },
  helpPlay: {
    fontSize: 18,
    color: '#6E7D7A',
  },
  chatBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: palette.primaryContainer,
    borderRadius: 12,
    padding: 12,
  },
  chatBannerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  chatBadge: {
    width: 28,
    height: 28,
    borderRadius: 999,
    backgroundColor: palette.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatBadgeText: {
    fontSize: 15,
    color: '#0F2522',
  },
  chatTextWrap: {
    flex: 1,
  },
  chatTitle: {
    fontSize: 12,
    lineHeight: 16,
    color: '#FCEBC7',
    fontWeight: '700',
  },
  chatSubtitle: {
    fontSize: 10,
    lineHeight: 14,
    color: '#C5D8CF',
    marginTop: 2,
  },
  chatAction: {
    backgroundColor: palette.secondary,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  chatActionText: {
    fontSize: 11,
    lineHeight: 14,
    color: '#0F2522',
    fontWeight: '700',
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 76,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderTopWidth: 1,
    borderTopColor: '#E7ECE9',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingHorizontal: 18,
    paddingBottom: 14,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4,
  },
  navItemActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4,
  },
  navIcon: {
    fontSize: 18,
    color: '#6C7A76',
  },
  navIconActive: {
    fontSize: 18,
    color: palette.primaryContainer,
  },
  navLabel: {
    marginTop: 4,
    fontSize: 10,
    lineHeight: 12,
    color: '#5C6663',
    fontWeight: '600',
  },
  navLabelActive: {
    marginTop: 4,
    fontSize: 10,
    lineHeight: 12,
    color: palette.primaryContainer,
    fontWeight: '700',
  },
  centerAddButton: {
    width: 54,
    height: 54,
    borderRadius: 999,
    backgroundColor: palette.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -18,
    borderWidth: 3,
    borderColor: '#F7EFE3',
  },
  centerAddText: {
    color: '#F7F3EA',
    fontSize: 28,
    lineHeight: 28,
    fontWeight: '300',
  },
});
