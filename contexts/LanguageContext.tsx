'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Language = 'en' | 'fa' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.overview': 'Overview',
    'nav.documents': 'Documents',
    'nav.analytics': 'Analytics',
    'nav.assets': 'Assets',
    'nav.profile': 'Profile',
    'nav.logout': 'Logout',
    
    // Header
    'header.search': 'Search',
    'header.notifications': 'Notifications',
    
    // Dashboard
    'dashboard.portfolio': 'Portfolio',
    'dashboard.portfolio.balance': 'Portfolio balance',
    'dashboard.yourAssets': 'Your Assets',
    'dashboard.market.down': 'Market is down',
    'dashboard.market.up': 'Market is up',
    'dashboard.earn.title': 'Earn free crypto with Coinview Earn!',
    'dashboard.earn.description': 'Learn about different cryptocurrencies and earn them for free!',
    'dashboard.earn.button': 'Earn Now',
    
    // Login
    'login.title': 'Login',
    'login.subtitle': 'Welcome to Crypto Dashboard',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.button': 'Login',
    'login.noAccount': "Don't have an account?",
    'login.signup': 'Sign up',
    
    // Register
    'register.title': 'Sign Up',
    'register.subtitle': 'Create a new account',
    'register.name': 'Full Name',
    'register.email': 'Email',
    'register.password': 'Password',
    'register.confirmPassword': 'Confirm Password',
    'register.button': 'Sign Up',
    'register.haveAccount': 'Already have an account?',
    'register.login': 'Login',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
  },
  fa: {
    // Navigation
    'nav.overview': 'نمای کلی',
    'nav.documents': 'اسناد',
    'nav.analytics': 'تحلیل',
    'nav.assets': 'دارایی‌ها',
    'nav.profile': 'پروفایل',
    'nav.logout': 'خروج',
    
    // Header
    'header.search': 'جستجو',
    'header.notifications': 'اعلان‌ها',
    
    // Dashboard
    'dashboard.portfolio': 'پورتفولیو',
    'dashboard.portfolio.balance': 'موجودی پورتفولیو',
    'dashboard.yourAssets': 'دارایی‌های شما',
    'dashboard.market.down': 'بازار پایین است',
    'dashboard.market.up': 'بازار بالا است',
    'dashboard.earn.title': 'کریپتو رایگان با Coinview Earn کسب کنید!',
    'dashboard.earn.description': 'در مورد ارزهای دیجیتال مختلف یاد بگیرید و آن‌ها را رایگان کسب کنید!',
    'dashboard.earn.button': 'همین حالا کسب کنید',
    
    // Login
    'login.title': 'ورود',
    'login.subtitle': 'به داشبورد کریپتو خوش آمدید',
    'login.email': 'ایمیل',
    'login.password': 'رمز عبور',
    'login.button': 'ورود',
    'login.noAccount': 'حساب کاربری ندارید؟',
    'login.signup': 'ثبت نام کنید',
    
    // Register
    'register.title': 'ثبت نام',
    'register.subtitle': 'حساب کاربری جدید ایجاد کنید',
    'register.name': 'نام و نام خانوادگی',
    'register.email': 'ایمیل',
    'register.password': 'رمز عبور',
    'register.confirmPassword': 'تکرار رمز عبور',
    'register.button': 'ثبت نام',
    'register.haveAccount': 'قبلا ثبت نام کرده‌اید؟',
    'register.login': 'وارد شوید',
    
    // Common
    'common.loading': 'در حال بارگذاری...',
    'common.error': 'خطا',
    'common.success': 'موفق',
  },
  ar: {
    // Navigation
    'nav.overview': 'نظرة عامة',
    'nav.documents': 'المستندات',
    'nav.analytics': 'التحليلات',
    'nav.assets': 'الأصول',
    'nav.profile': 'الملف الشخصي',
    'nav.logout': 'تسجيل الخروج',
    
    // Header
    'header.search': 'بحث',
    'header.notifications': 'الإشعارات',
    
    // Dashboard
    'dashboard.portfolio': 'المحفظة',
    'dashboard.portfolio.balance': 'رصيد المحفظة',
    'dashboard.yourAssets': 'أصولك',
    'dashboard.market.down': 'السوق منخفض',
    'dashboard.market.up': 'السوق مرتفع',
    'dashboard.earn.title': 'اكسب عملات مشفرة مجانية مع Coinview Earn!',
    'dashboard.earn.description': 'تعلم عن العملات المشفرة المختلفة واكسبها مجانًا!',
    'dashboard.earn.button': 'اكسب الآن',
    
    // Login
    'login.title': 'تسجيل الدخول',
    'login.subtitle': 'مرحبًا بك في لوحة تحكم العملات المشفرة',
    'login.email': 'البريد الإلكتروني',
    'login.password': 'كلمة المرور',
    'login.button': 'تسجيل الدخول',
    'login.noAccount': 'ليس لديك حساب؟',
    'login.signup': 'سجل',
    
    // Register
    'register.title': 'التسجيل',
    'register.subtitle': 'إنشاء حساب جديد',
    'register.name': 'الاسم الكامل',
    'register.email': 'البريد الإلكتروني',
    'register.password': 'كلمة المرور',
    'register.confirmPassword': 'تأكيد كلمة المرور',
    'register.button': 'التسجيل',
    'register.haveAccount': 'لديك حساب بالفعل؟',
    'register.login': 'تسجيل الدخول',
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'خطأ',
    'common.success': 'نجاح',
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language)
      document.documentElement.lang = language
      document.documentElement.dir = language === 'ar' || language === 'fa' ? 'rtl' : 'ltr'
    }
  }, [language, mounted])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

