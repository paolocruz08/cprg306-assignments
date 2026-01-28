import Link from "next/link"

export default function StudentInfo() {
    return (
        <section>
            <p>Name: Paolo Cruz</p>
            <Link 
                href="https://github.com/paolocruz08/cprg306-assignments"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                >
                    Github Repository
            </Link>
        </section>
    );
}